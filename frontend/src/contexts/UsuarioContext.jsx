import React, { useState, createContext } from 'react';

export const myUsuarioContext = createContext();

export function UsuarioProvider({ children }) {

    const [usuario, setUsuario] = useState();

    function registrarUsuario(payload = {}) {
        //funcion para registrar al usuario y loguearnos con el mismo...
        // console.log(payload);
        // celular: req.body.celular,
        // nombre: req.body.nombre,
        // apellido: req.body.apellido,
        // correoElectronico: req.body.correoElectronico,
        // foto: req.body.foto,
        // contraseña: req.body.contraseña,


        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            body: payload,
            headers: { "Content-type": "application/json" }
        }).then((data) => data.text())
            .then((data) => {
                if (data) {
                    setUsuario(data);
                }
            });

    }

    async function loguearUsuario(email, pass) {
        //realizar funcion fetch para buscar por correo y contrase;a
        fetch(`http://localhost:3000/usuario?email=${email}&pass=${pass}`)
            .then((data) => data.text())
            .then((data) => {
                if (data) {
                    setUsuario(data);
                }
            })
    }

    function desloguearUsuario() {
        setUsuario(null); // limpio el objeto de usuario 
    }

    return (
        <myUsuarioContext.Provider value={{ usuario, registrarUsuario, loguearUsuario, desloguearUsuario }}>
            {children}
        </myUsuarioContext.Provider>
    )
}