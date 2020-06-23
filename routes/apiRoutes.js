
// Routes
module.exports = function (app) {
    // CONTACT FORM
    app.post("/subscribe", function (req, res) {
        let response = {
            response: req.body,
        }
        res.json(response);
    });
};