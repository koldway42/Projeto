const Publication = require("../models/publication");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
    async index(req, resp) {
        const publications = await Publication.find().sort("-createdAt")

        return resp.json(publications)
    },

    async store(req, resp) {
        const { title, description, _id } = req.body;
        const {filename: image} = req.file;

        const [name] = image.split(".");
        const filename = `${name}.jpg`;

        await sharp(req.file.path)
        .resize(500)
        .jpeg({ quality: 70 })
        .toFile(
            path.resolve(req.file.destination, "resized", filename)
        );
    
        fs.unlinkSync(req.file.path);

        const publication = await Publication.create({
            _id,
            title,
            image: filename,
            description
        });

        return resp.json(publication);
    }
}