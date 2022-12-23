import React, { useState, createContext } from 'react';

export const myViajeContext = createContext();

export function ViajeProvider({ children }) {
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [idaVuelta, setIdaVuelta] = useState(true);


    function addOrigen(ori) {
        setOrigen(ori);
    }

    function addDestino(dest) {
        setDestino(dest);
    }

    function isIdaVuelta(bool) { setIdaVuelta(bool); }

    return (
        <myViajeContext.Provider value={{ addDestino, addOrigen, origen, destino, isIdaVuelta, idaVuelta }}>
            {children}
        </myViajeContext.Provider>
    )
}