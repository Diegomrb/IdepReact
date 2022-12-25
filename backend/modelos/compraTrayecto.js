const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let compraTrayectoSchema = new schema({
    pago: Boolean,
<<<<<<< Updated upstream
    vechaVencimiento: Date,
    numeroTicket: String, 
    pasajeIda: String, 
    pasajeVuelta: String, 
    usuarioId: [{type: schema.Types.ObjectId, ref: 'usuarios'}],
=======
    fechaVencimiento: Date,
    numeroTicket: String,
    pasajeIda: String,
    pasajeVuelta: String,
    usuarioId: [{ type: schema.Types.ObjectId, ref: 'usuarios' }],
>>>>>>> Stashed changes
})
let compraTrayecto = mongoose.model("compraTrayecto", compraTrayectoSchema)

module.exports = compraTrayecto;