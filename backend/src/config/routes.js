const express = require("express");
const multer = require("multer");
const publicationController = require("../controllers/publicationController");
const UploadConfig = require("./upload");

const routes = express.Router();
const upload = multer(UploadConfig);

routes.get("/projects", publicationController.index);
routes.post("/projects", upload.single("image"), publicationController.store);


module.exports = routes;