module.exports = function (publisher) {
    setInterval(
        function () {
            publisher.publish("test", makeid());
        }, 10000);
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.?~!@#$^&*()_-+";

    for (var i = 0; i < 64; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
