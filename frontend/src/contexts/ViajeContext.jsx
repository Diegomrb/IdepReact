import React, { useState, createContext } from 'react';

export const myViajeContext = createContext();

export function ViajeProvider({ children }) {

    const [pasaje, setPasaje] = useState({});
    // dato temporal 

    const [pasajeida, setPasajeida] = useState(""); //id ida
    const [pasajevuelta, setPasajevuelta] = useState(""); // id de vuelta

    const addPasajeIdaVuelta = (payload = {}, tipo = "ida") => {
        //Aqui vamos a realizar el post hacia "/pasajes".

        // Estructura del payload:
        //     {
        //      "linea": "63a622c93d244fa8ecbdf917",
        //      "viaje": "63a627703d244fa8ecbdf951",
        //      "asientos": [1,2,3]
        //    }

        fetch("http://localhost:3000/pasajes", {
            method: "POST",
            body: payload,
            headers: { "Content-type": "application/json" }
        }).then((data) => data.text())
            .then((data) => {

                if (tipo == "ida") {
                    setPasajeida(data._id);
                } else {
                    setPasajevuelta(data._id);
                }

            });

    }
    const addPasaje = (info) => setPasaje(info);
    const cleanPasaje = () => setPasaje({});

    return (
        <myViajeContext.Provider value={{ addPasaje, cleanPasaje, pasaje, addPasajeIdaVuelta, pasajeida, pasajevuelta }}>
            {children}
        </myViajeContext.Provider>
    )
}