const Publication = require("../models/publication");
const validations = require("../config/validations")
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const { existsOrError } = validations;

module.exports = {

    async index(req, resp) {
        const publications = await Publication.find().sort("-createdAt")

        return resp.json(publications)
    },

    async store(req, resp) {
        const { title, description, group, room } = req.body;

        try {
            existsOrError(title, "Nome de Projeto Inválido");
            existsOrError(group, "Grupo Inválido");
            existsOrError(description, "Descricão inválida");
            existsOrError(room, "Sala inválida");
            existsOrError(req.file, "Imagem não encontrada");
        } catch(err) {
            return resp.status(400).send(err.message)
        }
        const {filename: image} = req.file;
        const [name] = image.split(".");
        const filename = `${name}.jpg`;

        await sharp(req.file.path)
        .resize(1080)
        .jpeg({ quality: 100 })
        .toFile(
            path.resolve(req.file.destination, "resized", filename)
        );
    
        fs.unlinkSync(req.file.path);

        const publication = await Publication.create({
            title,
            image: filename,
            description,
            group,
            room
        });

        return resp.json(publication);
    }
}