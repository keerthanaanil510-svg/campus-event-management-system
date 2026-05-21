const express = require("express");
const db = require("./db");
const app = express();

app.get("/", (req, res) => {
    res.send("Backend Server Running");
});
app.get("/users", (req, res) => {

    const sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            res.send("Error fetching users");
        } else {
            res.send(result);
        }

    });

});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});