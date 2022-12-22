const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let localidadesSchema = new schema({
    nombre: String,
    departamento: String,
})
let localidades = mongoose.model("localidades", localidadesSchema)

module.exports = localidades;