var http = require('http');
var bl = require('bl');

var getData = function(url){
    let count = 0;
    http.get(url, function(res){
        res.setEncoding("utf8");
        res.on("data", buff => {
            var data = buff.split("");
            data.forEach(char => count++);
        });
        res.pipe(bl(function(err,data){
            if (err) {
                return console.error(err);
            }
            console.log(count);
            console.log(data.toString("ascii"));
            }
        ));

    })
    //.on("data", data => console.log(data));
}

getData(process.argv[2]);