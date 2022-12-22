const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let viajesSchema = new schema({
    linea: {type: schema.Types.ObjectId, ref: 'linea'},
    fecha: Date,
    asientos: [Number],
    lugares: Number,
    numeroDeCoche: String,
    tipoDeViaje: String,
    duracion: Number,
    horaDeSalida: String,
    
})
let viajes = mongoose.model("viajes", viajesSchema)

module.exports = viajes;