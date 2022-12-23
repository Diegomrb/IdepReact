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

/* const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
}); */

/* const story = await Story.findOne({ title: 'Casino Royale' }).populate('authors');
 */