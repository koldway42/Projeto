const Publication = require("../models/publication");
const validations = require("../config/validations")
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const { 
    existsOrError,
    EqualsOrError
 } = validations;

module.exports = {

    async reset(req, resp, next) {
        await Publication.remove( {__v: 0} );

        resp.send("<h2> Reset realizado </h2>");

        next()
    },

    async index(req, resp) {
        const {category, room , min, max} = req.query;
        console.log(req.query)

        category === "Todos" ? "" : category;
        room === "Todos" ? "" : room;

        let publications = await Publication.find({
            category: {$exists : true, $ne : ""},
            room: {$exists : true, $ne : ""}
        })

        let pages = publications.length;

        publications = await Publication.find({
            category: {$exists : true, $ne : ""},
            room: {$exists : true, $ne : ""}
        }).limit(parseInt(max)).skip(parseInt(min));

        

        return resp.json({publications, pages })
    },

    async listCategories(req, resp) {
        let categories = await Publication.find({}, {category: 1, _id: 0})

        categories = categories.map(item => item.category)

        unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        return resp.json(categories.filter(unique))

    },

    async listRooms(req, resp) {
        let rooms = await Publication.find({}, {room: 1, _id: 0})

        rooms = rooms.map(item => item.room)

        unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        return resp.json(rooms.filter(unique))

    },


    async store(req, resp) {
        const { title, description, group, room, passwd, category } = req.body;

        try {
            existsOrError(title, "Nome de Projeto Inválido");
            existsOrError(group, "Grupo Inválido");
            existsOrError(description, "Descricão inválida");
            existsOrError(room, "Sala inválida");
            existsOrError(category, "Categoria de Projeto não selecionada");
            existsOrError(req.file, "Imagem não encontrada");
            EqualsOrError(passwd, "110374", "A senha de Administrador não confere.")
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
            room,
            category
        });

        return resp.json(publication);
    }
}