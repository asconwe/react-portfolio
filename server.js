require('dotenv').config({path: './.env'});
const express = require("express");
const bodyParser = require("body-parser");
const apiController = require("./controller/api");
const projectGetter = require("./controller/projectGetter");
const apiMailer = require('./controller/apiMailer')

// Initialize Express
const app = express();
// Use body-parser in our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => res.sendFile(__dirname + '/public/index.html'));

projectGetter(app);
apiController(app);
apiMailer(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("App running!", PORT === 3000 ? "at http://localhost:3000" : "");
});