
const express = require("express");

// Initialize Express
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => res.sendFile(__dirname + '/public/index.html'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("App running!");
});