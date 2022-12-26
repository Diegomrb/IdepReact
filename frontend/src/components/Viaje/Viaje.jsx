import { Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Viaje.css";

export const Viaje = () => {
    const [viaje, setViaje] = useState({}); // info del  viaje con el ID presentado sobre la URL
    const [asientos, setAsientos] = useState([]); //asientos en total
    const [asientosSel, setAsientosSel] = useState([]) //asientos seleccionados
    const { id } = useParams(); //"id" = id del viaje

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
                let arrAsientos = [];
                for (let i = 1; i <= 30; i++) {
                    arrAsientos.push(i);
                }
                setAsientos(arrAsientos);
            });

    }, [])
    function elegirAsiento(numAsiento) {
        if (asientosSel.includes(numAsiento)) { // si el asiento  estaba seleccionado, lo deseleccionamos
            setAsientosSel(asientosSel.filter(asiento => asiento !== numAsiento));
            return;
        }

        if (viaje.asientos.includes(numAsiento)) {
            // Esta ocupado asi que no podemos realizar ninguna accion;
            return;
        }

        // Si no esta dentro del array de asientos ocupado o elegido previamente, entonces lo ingresamos al array de elegidos.
        setAsientosSel([...asientosSel, numAsiento]);


    }
    return (
        <div>
            <div className='asiento-referencias'>
                <div><div className='asiento asiento_ocupado'></div> <span>Ocupado</span></div>
                <div><div className="asiento asiento_disponible"></div><span>Disponible</span></div>
                <div><div className="asiento asiento_elegido"></div><span>Elegido</span></div>
            </div>
            <Stack direction="row" style={{ display: "flex", flexWrap: "nowrap", maxWidth: "300px" }}>
                {asientos.map((asiento, indx) => {
                    let estado = "asiento_disponible";
                    if (viaje.asientos.includes(asiento)) estado = "asiento_ocupado";
                    if (asientosSel.includes(asiento)) estado = "asiento_elegido";
                    return (<div className={`asiento ${estado}`} onClick={(e) => elegirAsiento(asiento)}></div>);
                })}
            </Stack>

        </div>
    );
}
