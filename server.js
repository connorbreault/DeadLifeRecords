require("dotenv").config();
var http = require('http');
var enforce = require('express-sslify');
var express = require("express");
var app = express();
var db = require("./models");
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
if (app.get("env") === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  http.createServer(app).listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
