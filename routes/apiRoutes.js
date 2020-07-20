var db = require("../models");
// Routes
module.exports = function (app) {
    // Subs get
    app.get("/api/all", function (req, res) {
        db.Sub.findAll({}).then(function (results) {
            res.json(results);
        });

    });

    // Subs post
    app.post("/subscribe", function (req, res) {
        console.log("Sub Data: " + req.body);

        Sub.create({
            name: req.body.name,
            email: req.body.email,
        }).then(function (results) {
            console.log(results)
            res.end();
        });
    });
};