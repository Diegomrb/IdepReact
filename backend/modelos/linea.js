const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let lineaSchema = new schema({
    ruta: {type: schema.Types.ObjectId, ref: 'ruta'},
    empresa: {type: schema.Types.ObjectId, ref: 'empresa'},
    precio: Number,
    
})
let linea = mongoose.model("linea", lineaSchema)

module.exports = linea;