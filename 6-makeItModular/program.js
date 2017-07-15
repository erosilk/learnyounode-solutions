var filteredLs = require('./filteredls.js');

var logFileName = function(err, data){
    if (err) return console.error("An error has occurred");
    data.forEach(function(element) {
        console.log(element);
    }, this);
};

filteredLs(process.argv[2],process.argv[3],logFileName);
