// ===============================================================================
var path = require("path");

module.exports = function (app) {

    // INDEX
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    // MAIN PAGES
    app.get("/:page", function (req, res) {
        let page = req.params.page
        res.sendFile(path.join(__dirname, `../views/${page}.html`));
    });

    // BANDS
    app.get("/bands/:band", function (req, res) {
        let band = req.params.band
        res.sendFile(path.join(__dirname, `../views/bands/${band}.html`));
    });
};