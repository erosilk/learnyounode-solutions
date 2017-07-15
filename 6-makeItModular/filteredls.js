var fs = require('fs');

module.exports = function (path, ext, callback) {
    fs.readdir(path, filterLs)
    function filterLs(err, list) {
        if (err) return callback(err);
        // data successful
        newList = list.filter(function (fileStr) {
            return fileStr.slice(fileStr.indexOf(".") + 1) === ext
                && fileStr.indexOf(".") > 0;
        });
        callback(null, newList);
    }
};



