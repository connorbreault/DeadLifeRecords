require("dotenv").config();
var express = require("express");
const bodyParser = require('body-parser')

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Starting the server ------------------------------------/
app.listen(PORT, function () {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});

module.exports = app;