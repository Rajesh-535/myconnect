const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "p@d@l@",
    password: "padala",
    database: "mycrud",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    }
    else {
        console.log("Connection failed");
    }
});

module.exports = mysqlConnection;