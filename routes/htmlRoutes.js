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
    app.get("/bands/apolloskey", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/apolloskey.html"));
    });
    app.get("/bands/awakingmemory", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/awakingmemory.html"));
    });
    app.get("/bands/hardknox", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/hardknox.html"));
    });
    app.get("/bands/hauntedbyday", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/hauntedbyday.html"));
    });
    app.get("/bands/infinitointorqueo", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/infinitointorqueo.html"));
    });
    app.get("/bands/nailthecasket", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/nailthecasket.html"));
    });
    app.get("/bands/petroglyphs", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/petroglyphs.html"));
    });
    app.get("/bands/smackdUp", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/smackdUp.html"));
    });
    app.get("/bands/shorelines", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/shorelines.html"));
    });
    app.get("/bands/thewolvesareclosingin", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/bands/thewolvesareclosingin.html"));
    });
};