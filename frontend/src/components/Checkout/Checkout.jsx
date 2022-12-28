import React, { useState, useEffect, useContext } from 'react'
import { myUsuarioContext } from '../../contexts/UsuarioContext';
import { myViajeContext } from '../../contexts/ViajeContext';
import { useNavigate } from 'react-router-dom';
import { Stack, Card, CardBody, CardFooter, CardHeader, Text, Button, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';
import moment from "moment";
import "./Checkout.css";

export function Checkout() {
    const { usuario } = useContext(myUsuarioContext);
    const { pasaje, pasajeida, pasajevuelta, comprarViaje } = useContext(myViajeContext);
    const navigate = useNavigate();
    const [viajes, setViajes] = useState([]);
    console.log(usuario);
    // useEffect(() => {
    //     console.log(pasajeida);
    //     let viajeIDA = JSON.parse(pasajeida);
    //     if (pasajeida) {
    //         setViajes([...viajes, pasaje.viajes.filter((viaje) => viaje._id == viajeIDA.pas["viaje"][0])]);
    //     }
    //     if (pasaje.idaVuelta && pasajevuelta) {
    //         let viajeVuelta = JSON.parse(pasajevuelta);
    //         setViajes([...viajes, pasaje.viajes.filter((viaje) => viaje._id == viajeVuelta.pas["viaje"][0])]);
    //     }
    // }, [pasajeida, pasajevuelta]);

    return (
        <Stack flexDirection={"column"} gap={3} height={"100vh"} maxHeight={"100%"} justifyContent="center">
            <Heading as="h2" size="xl" noOfLines={1}>
                {pasaje.nombreOrigen} - {pasaje.nombreDestino}
            </Heading>
            {/*
                viajes.map((viaje, indx) => <CardTimeLine key={indx} info={viaje} />)
    */}
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" />
            </FormControl>

            <FormControl>
                <FormLabel>Apellido</FormLabel>
                <Input type="text" />
            </FormControl>

            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
            </FormControl>

            <FormControl>
                <FormLabel>Tarjeta</FormLabel>
                <Input type="text" />
            </FormControl>
            <Button style={{ "marginTop": "10px", width: "80%", "backgroundColor": "#00ADBF", "color": "white" }} onClick={() => {
                comprarViaje(JSON.stringify({
                    "pasajeIda": pasajeida,
                    "pasajeVuelta": pasajevuelta,
                    "usuarioId": usuario._id
                }))

                navigate("/pasajes")
            }} >
                Pagar
            </Button>
        </Stack>
    )
}


function CardTimeLine({ info }) {
    console.log(info)
    info = info[0]
    // tiempo duracion calculado para que salga con formato HH:MM
    let durTotalHoras = moment
        .duration(info.horaDeSalida)
        .add(info.duracion, "minutes")
        .asHours();
    let durTotalMinutos = (durTotalHoras - Math.trunc(durTotalHoras)) * 60;

    // logica de duracion total a string
    let durTotalString = `${Math.trunc(durTotalHoras)}:${durTotalMinutos}`;
    durTotalString = durTotalString.split(".")[0];
    durTotalString += durTotalString.split(":")[1] == "0" ? "0" : "";
    //----------------------------------------------

    // Tiempo duracion de minutos a horas y minutos:
    let segundosP = Number(info.duracion) * 60;
    const horasD = Math.floor(segundosP / 0xe10).toString();
    const minutosD = (Math.floor(segundosP / 0x3c) % 0x3c).toString();

    let { nombreOrigen } = info;
    let { nombreDestino } = info;
    //let logoEmpresa = info.viajes[0].linea.empresa.logo;

    return (<Card
        margin={"8px"}
    >
        <CardHeader textAlign={"center"}>
            <img style={{ width: "50%" }} src={""} alt={""} />
        </CardHeader>
        <CardBody className="card-body-container">
            <ul className="timeline">
                <li>
                    <span>{nombreOrigen}</span>
                    <span>{"hora salida"}</span>
                </li>
                <li data-duracion>
                    <span>{`${horasD}h ${minutosD}m`}</span>
                </li>
                <li>
                    <span>{nombreDestino}</span>
                    <span>{durTotalString}</span>
                </li>
            </ul>
        </CardBody>
        <CardFooter
            backgroundColor={"#00ADBF"}
            justifyContent="center"
            color={"white"}
        >
            <Text>Precio: $ {info.linea.precio}</Text>
        </CardFooter>
    </Card>)
}