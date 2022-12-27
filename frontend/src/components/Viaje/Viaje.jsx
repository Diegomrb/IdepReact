import { Grid, GridItem, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { myViajeContext } from '../../contexts/ViajeContext';

import "./Viaje.css";

export const Viaje = () => {
    const [viaje, setViaje] = useState({}); // info del  viaje con el ID presentado sobre la URL
    const [asientos, setAsientos] = useState([]); //asientos en total
    const [asientosSel, setAsientosSel] = useState([]) //asientos seleccionados
    const { id, tipoViaje } = useParams(); //"id" = id del viaje
    const { pasaje, addPasajeIdaVuelta } = useContext(myViajeContext);
    const navigate = useNavigate();

    // definiendo mensaje del boton en base al tipo de viaje
    let mensajeBoton = "";
    let rutaBoton = "";

    if (pasaje.idaVuelta && tipoViaje == "ida") {
        mensajeBoton = "Siguiente";
        rutaBoton = `/viajes/vuelta`
    } else if (pasaje.idaVuelta && tipoViaje == "vuelta") {
        mensajeBoton = "Pagar";
        rutaBoton = `/checkout`;
    } else {
        mensajeBoton = "Pagar";
        rutaBoton = "/checkout";
    }

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

    function agregarPasaje() {
        let payload = {
            "linea": viaje.linea._id,
            "viaje": viaje._id,
            "asientos": asientosSel
        }
        addPasajeIdaVuelta(JSON.stringify(payload), tipoViaje);
        navigate(rutaBoton);
    }

    return (
        <Stack display={"flex"} alignItems={"center"} justifyContent="center" style={{ padding: "10px" }}>
            <div className='asiento-referencias'>
                <div><div className='asiento asiento_ocupado'></div> <span>Ocupado</span></div>
                <div><div className="asiento asiento_disponible"></div><span>Disponible</span></div>
                <div><div className="asiento asiento_elegido"></div><span>Elegido</span></div>
            </div>
            <Grid templateColumns='repeat(2, 1fr)' w="300px" gap={2} style={{ "maxWidth": "100%", "maxHeight": "100vh" }}>
                {Object.keys(viaje).length && <Grid style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <div className='pasaje-precio'>
                        <span>Precio por pasaje</span>
                        <span>${viaje.linea.precio}</span>
                    </div>
                    <FormControl>
                        <FormLabel>Precio total</FormLabel>
                        <Input
                            variant="outline"
                            placeholder="Origen"
                            value={`$${asientosSel.reduce((pv) => pv + viaje.linea.precio, 0)}`}
                            disabled
                        />
                    </FormControl>
                </Grid>}
                <Grid templateColumns='repeat(4, 1fr)' w="20px" gap={2} >
                    {asientos.map((asiento, indx) => {
                        let estado = "asiento_disponible";
                        if (viaje.asientos.includes(asiento)) estado = "asiento_ocupado";
                        if (asientosSel.includes(asiento)) estado = "asiento_elegido";
                        return (<GridItem w="25px" key={asiento} >
                            <div className={`asiento ${estado}`} onClick={(e) => elegirAsiento(asiento)} >{asiento}</div>
                        </GridItem>);
                    })}
                </Grid>
            </Grid>
            <Button style={{ "marginTop": "10px", width: "80%", "backgroundColor": "#00ADBF", "color": "white" }} onClick={agregarPasaje}>
                {mensajeBoton}
            </Button>
        </Stack >
    );
}
