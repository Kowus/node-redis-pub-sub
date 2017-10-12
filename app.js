var redis = require("redis")
    , subscriber = redis.createClient()
    , publisher = redis.createClient();
require('./pub')(publisher);
subscriber.on("message", function (channel, message) {
    var report = {
        "message": message,
        "channel": channel
    }
    console.log(report)
});

subscriber.subscribe("test");

// publisher.publish("test", "haaaaai");
// publisher.publish("test", "kthxbai");

