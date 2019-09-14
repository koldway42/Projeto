const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = app => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended: true } ));
    app.use(cors());
    app.use(require("./routes.js"))

}

