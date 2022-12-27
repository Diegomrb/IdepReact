import React, { useState, createContext } from 'react';

export const myUsuarioContext = createContext();

export function UsuarioProvider({ children }) {

    const [usuario, setUsuario] = useState({});

    function registrarUsuario(payload = {}) {
        //funcion para registrar al usuario y loguearnos con el mismo...
        console.log(payload);
    }

    function loguearUsuario() {
        //realizar funcion fetch para buscar por correo y contrase;a
    }

    return (
        <myUsuarioContext.Provider value={{ usuario }}>
            {children}
        </myUsuarioContext.Provider>
    )
}