const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let pasajesSchema = new schema({
    viaje: [{type: schema.Types.ObjectId, ref: 'viaje'}],
    linea: [{type: schema.Types.ObjectId, ref: 'linea'}],
    asientos: [Number],
    
})
let pasajes = mongoose.model("pasajes", pasajesSchema)

module.exports = pasajes;