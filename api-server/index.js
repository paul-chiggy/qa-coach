// importing redis creds from env vars stored in keys
const keys = require("./keys");

// Express App setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgress client setup
const { Pool } = require("pg");
const pgClient = new Pool({
    host: keys.pgHost,
    user: keys.pgUser,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: parseInt(keys.pgPort),
});

pgClient.on("connect", () => {
    pgClient
        .query("CREATE TABLE IF NOT EXISTS values (number INT)")
            .catch((err) => console.log(err));
});

// Redis client setup
const redis = require("redis");
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: parseInt(keys.redisPort),
    retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();
const healthCheck = {
    health: 200
};

// Express api routing handler
app.get("/", (req, res) => {
    res.send(healthCheck);
});

app.get("/values/all", async (req, res) => {
    // query postgres DB, values table
    const values = await pgClient.query("SELECT DISTINCT * FROM values ORDER BY number ASC");
    // send all selected entries back in response
    res.send(values.rows);
});

app.get("/values/current", async (req, res) => {
    // query redis DB, values table
    redisClient.hgetall("values", (err, values) => {
        res.send(values);
    });
});

app.post("/values/new", async (req, res) => {
    const index = req.body.index;

    // capping to max 40 to avoid resources overhead and for testing purposes
    if(parseInt(index) > 100000) {
        return res.status(422).send("Provided index is too high, max 100000");
    }

    redisClient.hsetnx("values", index, cube(index).toString());
    // save to Redis "temp" values collection
    redisPublisher.publish("insert", index);
    // save to Postgress in "permamnent" values table
    pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);
    res.send({ working: true });
});

function cube(number) {
    return number * number;
}

app.listen(parseInt(keys.apiPort), err => {
    console.log("Api server is listening on port: [" + keys.apiPort +"]");
});