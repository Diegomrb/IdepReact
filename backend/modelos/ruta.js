const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let rutaSchema = new schema({
  origen: { type: schema.Types.ObjectId, ref: 'localidades' },
  destino: { type: schema.Types.ObjectId, ref: 'localidades' },
  paradas: [{ type: schema.Types.ObjectId, ref: 'localidades' }],

})
let ruta = mongoose.model("ruta", rutaSchema)

module.exports = ruta;