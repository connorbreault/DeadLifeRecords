var db = require("../models");
// Routes
module.exports = function (app) {
    // Subs get
    app.get("/api/all", function (req, res) {
        db.Sub.findAll({}).then(function (results) {
            // results are available to us inside the .then
            res.json(results);
        });

    });

    // Subs post
    app.post("/subscribe", function (req, res) {
        console.log("Sub Data:");
        console.log(req.body);

        // Sub.create({
        //     name: req.body.name,
        //     email: req.body.email,
        // }).then(function (results) {
        //     // `results` here would be the newly created Sub
        //     console.log(results)
        //     res.end();
        // });
    });
};