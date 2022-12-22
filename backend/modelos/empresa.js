const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let empresaSchema = new schema({
    nombre: String,
    logo: String,
    
})
let empresa = mongoose.model("empresa", empresaSchema)

module.exports = empresa;