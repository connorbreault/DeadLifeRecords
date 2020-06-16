
// Routes
module.exports = function (app) {
    // CONTACT FORM
    app.post("/subscribe", function (req, res) {
        let request = req.body
        res.send(request.toString());
    });
};