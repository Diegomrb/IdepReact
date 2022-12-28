import React, { useState, createContext } from 'react';

export const myViajeContext = createContext();

export function ViajeProvider({ children }) {

    const [pasaje, setPasaje] = useState({});
    // dato temporal 

    const [pasajeida, setPasajeida] = useState(); //id ida
    const [pasajevuelta, setPasajevuelta] = useState(); // id de vuelta

    const comprarViaje = async (payload = {}) => {
        // aqui vamos a realizar el post a "/compraTrayectos"
        // Estructura 
        // {
        //     "pasajeIda": "63aaf11c05b8829c26346c34",
        //     "pasajeVuelta": "63aaf11c05b8829c26346c34",
        //     "usuarioId": "6376cd35c73d814aba5db8e4"
        //   }

        let data = await fetch("http://localhost:3000/compraTrayecto", {
            method: "POST",
            "body": payload,
            headers: { "Content-type": "application/json" }
        })

        data = await data.text();
        return data;

    }
    const addPasajeIdaVuelta = async (payload = {}, tipo = "ida") => {
        //Aqui vamos a realizar el post hacia "/pasajes".

        // Estructura del payload:
        //     {
        //      "linea": "63a622c93d244fa8ecbdf917",
        //      "viaje": "63a627703d244fa8ecbdf951",
        //      "asientos": [1,2,3]
        //    }

        let data = await fetch("http://localhost:3000/pasajes", {
            method: "POST",
            body: payload,
            headers: { "Content-type": "application/json" }
        })

        data = await data.text();

        if (tipo == "ida") {
            setPasajeida(JSON.parse(data).pas._id);
            console.log("guardo pasaje ida");
            console.log(data);
        } else {
            setPasajevuelta(JSON.parse(data).pas._id);
            console.log("guardo pasaje vuelta");
            console.log(data);

        }

        return data;
    }

    const addPasaje = (info) => setPasaje(info);
    const cleanPasaje = () => setPasaje({});

    return (
        <myViajeContext.Provider value={{ addPasaje, cleanPasaje, pasaje, addPasajeIdaVuelta, pasajeida, pasajevuelta, comprarViaje }}>
            {children}
        </myViajeContext.Provider>
    )
}