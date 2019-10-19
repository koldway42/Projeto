const Visitor = require("../models/visitor");
const validations = require("../config/validations");

const {  
    existsOrError,
    notExistsOrError,
    emailOrError
} = validations;

module.exports = {

    async reset(req, resp, next) {
        await Visitor.remove( {__v: 0} );

        resp.send("<h2> Reset realizado </h2>");

        next()
    },

    async index(req, resp) {
        const visitors = await Visitor.find();

        return resp.json(visitors)
    },

    async store(req, resp) {
        const { 
            name,
            email,
            rating,
            opinion,
            favoriteMathProj,
            favoriteBiomeProj
        } = req.body;

        try {
            existsOrError(name, "Nome não informado.");
            existsOrError(email, "Email não informado.");
            existsOrError(rating, "Avaliação não informada.");
            emailOrError(email, "Email inválido.");

            existsOrError(favoriteBiomeProj, "Projeto(Biomas) favorito não informado.");
            existsOrError(favoriteMathProj, "Projeto(Tecnológico) favorito não informado.");

            const existentEmail = await Visitor.findOne({ email });
            notExistsOrError(existentEmail, "O email já foi registrado");

        } catch(e) {
            return resp.status(400).send(e.message);
        }

        const visitor = await Visitor.create({
            name,
            email,
            rating,
            opinion,
            favoriteMathProj,
            favoriteBiomeProj,
        })

        return resp.json(visitor);
    }
    
}