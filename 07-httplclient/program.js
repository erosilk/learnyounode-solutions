var http = require('http');

var getData = function(url){
    http.get(url, function(res){
        res.setEncoding("utf8")
        res.on("data", el => console.log(el) );
    })
    //.on("data", data => console.log(data));
}

getData(process.argv[2]);