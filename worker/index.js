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

// classic fibonacci number solution
function fib(index) {
    if(index < 2) return 1;
    return fib(index - 1) + fib(index -2 );
}

sub.on("message", (channel, message) => {
    redisClient.hset("values", message, fib(parseInt(message)));
});
sub.subscribe("insert");
