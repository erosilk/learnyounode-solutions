var http = require('http');
var bl = require('bl');

var getData = function (url1, url2, url3) {
    var urlQueue = [url1, url2, url3];

    function fetch(url, cb) {
        http.get(url, function (res) {
            res.pipe(bl(function (err, data) {
                if (err) {
                    cb(err);
                }
                cb(null, data.toString("ascii"))
            }
            ))
        }).on("error", err => cb(err));
    }

    function queue(){
        if (urlQueue.length > 0) {
            fetch(urlQueue[0], handleResult);
        }
    }

    function handleResult(err, data) {
        if (err) {
            console.error(err);
        }
        console.log(data);
        urlQueue.shift()
        queue();
    }

    queue();


}

getData(process.argv[2],process.argv[3],process.argv[4]);