
// Routes
module.exports = function (app) {
    // CONTACT FORM
    app.post("/subscribe", function (req, res) {
        res.json(req.body);
    });
};