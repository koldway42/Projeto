const express = require("express");
const multer = require("multer");
const publicationController = require("../controllers/publicationController");
const visitorController = require("../controllers/visitorController");
const UploadConfig = require("./upload");

const routes = express.Router();
const upload = multer(UploadConfig);

routes.get("/projects", publicationController.index);
routes.get("/projectsFilter", publicationController.filter)
routes.post("/projects", upload.single("image"), publicationController.store);
routes.get("/categories", publicationController.listCategories);
routes.get("/rooms", publicationController.listRooms);

routes.get("/visitors", visitorController.index);
routes.post("/visitors", visitorController.store);

routes.get("/reset", visitorController.reset);
routes.get("/reset", publicationController.reset);


module.exports = routes;