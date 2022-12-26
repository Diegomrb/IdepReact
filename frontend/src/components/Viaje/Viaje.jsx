import { Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Viaje.css";

export const Viaje = () => {
    const [viaje, setViaje] = useState({})
    const { id } = useParams();

    useEffect(() => {

        fetch(`http://localhost:3000/viaje?viajeId=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setViaje(datos);
            });

    }, [])

    return (
        <div>
            <div className='asiento-referencias'>
                <div><div className='asiento asiento_ocupado'></div> <span>Ocupado</span></div>
                <div><div className="asiento asiento_disponible"></div><span>Disponible</span></div>
                <div><div className="asiento asiento_elegido"></div><span>Elegido</span></div>
            </div>
            <Stack direction="column">

            </Stack>

        </div>
    );
}
