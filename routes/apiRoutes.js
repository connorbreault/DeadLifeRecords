
// Routes
module.exports = function (app) {
    // CONTACT FORM
    app.post("/api/contact", function (req, res) {
        console.log(req.body.fname);
    });
};