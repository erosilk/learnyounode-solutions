var net = require("net");
var server = net.createServer(function listener(socket) {
    var date = new Date();
    let getZero = function(val) {
        val = String(val);
        return val.length === 1 ? "0".concat(val) : val;
    }

    let month = getZero(date.getMonth()+1);
    let day = getZero(date.getDate());
    let year = date.getFullYear();

    let hh = getZero(date.getHours());
    let mm = getZero(date.getMinutes());
    let time = hh + ":" + mm;

    var now = year + "-" + month + "-" + day + " " + hh + ":" + mm + "\n";

    socket.end(now);
})

server.listen(process.argv[2]);