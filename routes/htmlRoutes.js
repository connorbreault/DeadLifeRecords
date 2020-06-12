// ===============================================================================
var path = require("path");

module.exports = function (app) {

    // INDEX
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    // MAIN PAGES
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/contact.html"));
    });
    app.get("/bands", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands.html"));
    });
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/about.html"));
    });


    // BANDS
    app.get("/bands/:band", function (req, res) {
        let band = req.params.band
        res.sendFile(path.join(__dirname, "../views/bands/" + band + ".html"));
    });
};