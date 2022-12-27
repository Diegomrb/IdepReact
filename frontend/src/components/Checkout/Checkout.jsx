import React, { useState, useEffect, useContext } from 'react'
import { myUsuarioContext } from '../../contexts/UsuarioContext';
import { myViajeContext } from '../../contexts/ViajeContext';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import "./Checkout.css";

export function Checkout() {
    const { usuario } = useContext(myUsuarioContext);
    const { pasaje } = useContext(myViajeContext);
    const navigate = useNavigate();

    return (
        <Stack flexDirection={"column"} gap={3} height={"100vh"} maxHeight={"100%"}>
            <CardTimeLine pasaje={pasaje} />
        </Stack>
    )
}


function CardTimeLine(pasaje) {

    // tiempo duracion calculado para que salga con formato HH:MM
    let durTotalHoras = moment
        .duration(pasaje.horaDeSalida)
        .add(pasaje.duracion, "minutes")
        .asHours();
    let durTotalMinutos = (durTotalHoras - Math.trunc(durTotalHoras)) * 60;

    // logica de duracion total a string
    let durTotalString = `${Math.trunc(durTotalHoras)}:${durTotalMinutos}`;
    durTotalString = durTotalString.split(".")[0];
    durTotalString += durTotalString.split(":")[1] == "0" ? "0" : "";
    //----------------------------------------------

    // Tiempo duracion de minutos a horas y minutos:
    let segundosP = Number(pasaje.duracion) * 60;
    const horasD = Math.floor(segundosP / 0xe10).toString();
    const minutosD = (Math.floor(segundosP / 0x3c) % 0x3c).toString();

    let nombreOrigen = pasaje.linea.ruta.origen.nombre;
    let nombreDestino = pasaje.linea.ruta.destino.nombre;

    return (<Card
        margin={"8px"}
    >
        <CardHeader textAlign={"center"}>
            <img style={{ width: "50%" }} src={pasaje.linea.empresa.logo} alt={pasaje.linea.empresa.logo} />
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
            <Text>Precio: $ {pasaje.linea.precio}</Text>
        </CardFooter>
    </Card>)
}