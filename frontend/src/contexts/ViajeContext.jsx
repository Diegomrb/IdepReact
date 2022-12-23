import React, { useState, createContext } from 'react';

export const myViajeContext = createContext();

export function ViajeProvider({ children }) {
    const [pasaje, setPasaje] = useState({});

    const addPasaje = (info) => setPasaje(info);
    const cleanPasaje = () => setPasaje({});

    return (
        <myViajeContext.Provider value={{ addPasaje, cleanPasaje, pasaje }}>
            {children}
        </myViajeContext.Provider>
    )
}