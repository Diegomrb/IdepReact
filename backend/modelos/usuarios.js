const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let usuariosSchema = new schema({
    celular: String,
    nombre: String,
    apellido: String,
    correoElectronico: String,
    foto: String,
    contraseña: String,
    fechaCreacion: { type: Date, default: Date.now },

})
let usuarios = mongoose.model("usuarios", usuariosSchema)

module.exports = usuarios;