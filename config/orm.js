var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString,[tableInput], function(err, result){
            if(err){throw err;}
            cb(result);
        });
    },
    insertOne: function(tableInput, colName, valueInput, cb){
        var queryString = "INSERT INTO ?? (??, devoured) VALUES(?, false)";
        var query = connection.query(queryString, [tableInput, colName, valueInput], function(err, result){
            if(err){throw err;}
            cb(result);
        });
        console.log(query.sql);
    },
    updateOne: function(tableInput, colName, condition, cb){
        var queryString = "UPDATE ?? SET ?? = true WHERE ?";
        var query = connection.query(queryString, [tableInput, colName, condition], function(err, result){
            if(err){throw err;}
            cb(result);
        });
        console.log(query.sql);
    }
};

module.exports = orm;