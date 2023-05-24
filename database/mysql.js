const mysql = require('mysql');

// Creating connection to database
const con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "",
});

// Connecting to database
con.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to database");
})

module.exports = { mysql }