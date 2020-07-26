var db = require("../models");
var multer = require('multer');
var multipart = multer();
// Routes
module.exports = function (app) {
    // Subs get
    app.get("/a6p6i6/a4l2l0", function (req, res) {
        db.Sub.findAll({}).then(function (results) {
            res.json(results);
        });

    });

    // Subs post
    app.post("/subscribe", multipart.fields([]), function (req, res) {
        var response = {
            example: req.body ? req.body : ''
        };
        res.setHeader('Content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', '*.ampproject.org');
        res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'http://' + req.headers.host);
        res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
        res.json(response);
        db.Sub.create({
            name: req.body.name,
            email: req.body.email,
        }).then(function (results) {
            console.log(results)
            res.end();
        });
    });
    app.delete("/delete/:id", function (req, res) {
        db.Sub.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        })
    });
};