// ===============================================================================
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/contact.html"));
    });
    app.get("/bands", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands.html"));
    });
    app.get("/merch", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/merch.html"));
    });
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/about.html"));
    });

    // If no matching route is found default to home
    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });
};