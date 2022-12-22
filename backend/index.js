//REQUIRE
const express = require('express');
const app = express();
require("dotenv").config();
/* let userDB = process.env.DB_USER;
let passDB = process.env.DB_PASS; */
const port = process.env.PORT || 3000;
//-------------------------------
//CORS
const cors = require('cors');
app.use(cors());
//-------------------------------
//MONGOOSE
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://entrega:entrega@cluster0.zfkhx.mongodb.net/Idep?retryWrites=true&w=majority`);
let db = mongoose.connection;
db.once("open", () => console.log("conectado a la base"))

//-------------------------------
//MODELOS
let compraTrayecto = require("./modelos/compraTrayecto");
let empresa = require("./modelos/empresa");
let linea = require("./modelos/linea");
let localidades = require("./modelos/localidades");
let pasajes = require("./modelos/pasajes");
let ruta = require("./modelos/ruta");
let usuarios = require("./modelos/usuarios");
let viajes = require("./modelos/viajes");
const { find } = require('./modelos/compraTrayecto');

//-------------------------------

app.use(express.json());
//para poder acceder a los datos enviados por el body de post y put

//--------------------------------------

//ENRUTAMIENTO O DIRECCIONAMIENTO
//GET Peticiones de informacion
app.use("/", express.static("frontend"))


app.get("/", (req, res) => {
    id_valido = false;
    res.json({
        mensaje: "Servidor corriendo OK"
    });

})

app.post("/usuarios", (req, res) => {
    const article = new usuarios({
    celular: req.body.celular,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correoElectronico: req.body.correoElectronico,
    foto: req.body.foto,
    contraseña: req.body.contraseña,
});

article.save().then(user=> {
  res.json({user})

});
console.log(req.body.celular)
})

app.get("/usuarios", (req, res) => {
  /* me trae todo los usuarios */
    usuarios.find((err, usuarios) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(usuarios)
            res.json(usuarios)
        }
    })

  /* creacion de un usuario */
    
  /* const article = new usuarios({
    celular: "097538520",
    nombre: "Diego",
    apellido: "Rivero",
    correoElectronico: "diego@gmail.com",
    foto: "foto",
    contraseña: "contraseña",
}); */

// Insert the article in our MongoDB database
/* article.save().then(user=> {
  res.json({user})
}); */
;

})

app.get("/compraTrayecto", (req, res) => {

    compraTrayecto.find((err, compraTrayecto) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(compraTrayecto)
            res.json(compraTrayecto)
        }
    })
  })

app.get("/empresa", (req, res) => {

    empresa.find((err, empresa) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(empresa)
            res.json(empresa)
        }
    })
  })
  
  app.post("/empresa", (req, res) => {
    const empresaU = new empresa({
    nombre: req.body.nombre,
    logo: req.body.logo

});

empresaU.save().then(emp=> {
  res.json({emp})

});
console.log(req.body.nombre)

})

app.get("/linea", (req, res) => {

    linea.find((err, linea) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(linea)
            res.json(linea)
        }
    })
    .populate({ path: 'ruta', populate: { path: 'origen' } })
    .populate({ path: 'ruta', populate: { path: 'destino' } })
    .populate({ path: 'ruta', populate: { path: 'paradas' } })
    .populate("empresa")

})

    app.post("/linea", (req, res) => {
    const lineaU = new linea({
    ruta: req.body.ruta,
    empresa: req.body.empresa,
    precio: req.body.precio,

    
});

lineaU.save().then(linea=> {
  res.json({linea})

});
console.log(req.body.ruta)

}),

app.get("/localidades", (req, res) => {

    localidades.find((err, localidades) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(localidades)
            res.json(localidades)
        }
    })
  })

app.post("/localidades", (req, res) => {
    const localidad = new localidades({
    nombre: req.body.nombre,
    departamento: req.body.departamento,

});

localidad.save().then(loc=> {
  res.json({loc})

});
console.log(req.body.nombre)

}),


app.get("/pasajes", (req, res) => {

    pasajes.find((err, pasajes) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(pasajes)
            res.json(pasajes)
        }
    })
  })
app.get("/ruta", (req, res) => {

    ruta.find((err, ruta) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(ruta)
            res.json(ruta)
        }
    })
    .populate("origen")
    .populate("destino")
    .populate("paradas")
  })

  app.post("/ruta", (req, res) => {
    const rutaU = new ruta({
    origen: req.body.origen,
    destino: req.body.destino,
    paradas: req.body.paradas,

});


rutaU.save().then(ruta=> {
  res.json({ruta})

});
console.log(req.body.origen)

}),

app.get("/viajes", (req, res) => {
 const populateViajes = [
  {
    path: "linea",
    populate: [
      {
        path: "ruta",
        populate:[
          "origen",
          "destino",
          "paradas"
        ],
      },
      {
        path: "empresa",
      },
    ],
  },
];
    viajes.find({ origen: req.query.origen, duracion: { $gte: parseInt(req.query.duracion) } },
      (err, viajes) => {
        if (err) {

            console.log(err)
            return res.status(500).send()
        } else {
            console.log(viajes)
            res.json(viajes)
        }
    })

    .populate(populateViajes)

  });

  app.post("/viajes", (req, res) => {
    const viajesU = new viajes({
    linea: req.body.linea,
    fecha: req.body.fecha,
    asientos: req.body.asientos,
    lugares: req.body.lugares,
    numeroDeCoche: req.body.numeroDeCoche,
    tipoDeViaje: req.body.tipoDeViaje,
    duracion: req.body.duracion,
    horaDeSalida: req.body.horaDeSalida,

    });
    viajesU.save().then(viaje=> {
  res.json({viaje})

});
console.log(req.body.numeroDeCoche)
  });

/* 
buscar en el link que el profe paso
const userSchema = new Schema({ name: String }, {
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
});
 */

/* const testSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['valid', 'invalid']
  }
})

const Test = mongoose.model('Test', testSchema);

await Test.create({ name: 'not a status' }); // throws validation error
await Test.create({ name: 'valid' }); // works
 */

app.listen(port, () => {
    console.log(`Ejemplo de app en http:localhost:${port}`);
    console.log("hola")
})