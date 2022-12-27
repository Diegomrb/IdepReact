import { Grid, GridItem, Stack } from '@chakra-ui/react';
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
                for (let i = 1; i <= datos.lugares; i++) {
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
        <Stack display={"flex"} alignItems={"center"} style={{ padding: "10px" }}>
            <div className='asiento-referencias'>
                <div><div className='asiento asiento_ocupado'></div> <span>Ocupado</span></div>
                <div><div className="asiento asiento_disponible"></div><span>Disponible</span></div>
                <div><div className="asiento asiento_elegido"></div><span>Elegido</span></div>
            </div>
            <Grid templateColumns='repeat(4, 1fr)' w="20px" gap={2} style={{ "maxWidth": "100%", "maxHeight": "100vh" }}>
                {asientos.map((asiento, indx) => {
                    let estado = "asiento_disponible";
                    if (viaje.asientos.includes(asiento)) estado = "asiento_ocupado";
                    if (asientosSel.includes(asiento)) estado = "asiento_elegido";
                    return (<GridItem w="25px" key={asiento} >
                        <div className={`asiento ${estado}`} onClick={(e) => elegirAsiento(asiento)} >{asiento}</div>
                    </GridItem>);
                })}
            </Grid>

        </Stack >
    );
}
