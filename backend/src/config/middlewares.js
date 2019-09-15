const cors = require("cors");
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser");

module.exports = app => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended: true } ));
    app.use(cors());
    app.use("/files", express.static(path.resolve(__dirname, "..", "..", "uploads", "resized")))
    app.use(require("./routes.js"))

}

