const express = require("express");
const apiController = require("./controller/api");
const projectGetter = require("./controller/projectGetter");

// Initialize Express
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => res.sendFile(__dirname + '/public/index.html'));

projectGetter(app);
apiController(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("App running!", PORT === 3000 ? "at http://localhost:3000" : "");
});