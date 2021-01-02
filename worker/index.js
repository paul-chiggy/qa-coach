// importing redis creds from env vars stored in keys
const keys = require("./keys");
// importing redis
const redis = require("redis");

// initialising redis client
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: parseInt(keys.redisPort),
    retry_strategy: () => 1000
});
const sub = redisClient.duplicate();
sub.subscribe("insert");

// classic fibonacci number solution
function squared(number) {
    return number * number;
}

sub.on("message", (channel, message) => {
    redisClient.hsetnx("values", message, squared(parseInt(message)).toString());
});
