const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const path = require("./routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require("cors");
app.use(cors());

connection();
app.use("/", path);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
