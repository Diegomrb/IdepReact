const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let compraTrayectoSchema = new schema({
    pago: Boolean,
    vechaVencimiento: Date,
    numeroTicket: String, 
    pasajeIda: String, 
    pasajeVuelta: String, 
    usuarioId: [{type: schema.Types.ObjectId, ref: 'usuarios'}], 
})
let compraTrayecto = mongoose.model("compraTrayecto", compraTrayectoSchema)

module.exports = compraTrayecto;