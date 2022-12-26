import {
    Heading,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myViajeContext } from "../../contexts/ViajeContext";
import moment from "moment";
import "./Viajes.css";

export const Viajes = () => {
    const { pasaje } = useContext(myViajeContext);
    const { tipoViaje } = useParams();
    console.log("este es mi tipo de viaje: " + tipoViaje);

    let origen = pasaje.localidades.filter(
        (item) => item["_id"] == pasaje.origen
    )[0];
    let destino = pasaje.localidades.filter(
        (item) => item["_id"] == pasaje.destino
    )[0];

    return (
        <div>
            <Stack margin={"8px"} direction={["column"]}>
                <Heading as="h2" size="xl" noOfLines={1}>
                    Elije tu viaje de ida
                </Heading>
                <Stack direction={"row"}>
                    <FormControl>
                        <FormLabel>Origen</FormLabel>
                        <Input
                            variant="outline"
                            placeholder="Origen"
                            value={`${origen.nombre}, ${origen.departamento}`}
                            disabled
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Destino</FormLabel>
                        <Input
                            variant="outline"
                            placeholder="Destino"
                            value={`${destino.nombre}, ${destino.departamento}`}
                            disabled
                        />
                    </FormControl>
                </Stack>
                <Stack direction={"row"}>
                    <FormControl>
                        <FormLabel>Fecha inicio</FormLabel>
                        <Input
                            variant="outline"
                            placeholder="Origen"
                            value={pasaje.inicio}
                            type="input"
                            disabled
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Fecha fin</FormLabel>
                        <Input
                            variant="outline"
                            placeholder="Destino"
                            value={pasaje.fin}
                            type="input"
                            disabled
                        />
                    </FormControl>
                </Stack>
            </Stack>

            <Stack direction={"column"}>
                {pasaje.viajes.map((viaje) => (
                    <PasajesCards key={viaje._id} info={viaje} />
                ))}
            </Stack>
        </div>
    );
};

function PasajesCards({ info }) {
    const { tipoViaje } = useParams();
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

    //variables para facilitar el manejo de las mismas
    let logo = info.linea.empresa.logo;
    let nombreEmp = info.linea.empresa.nombre;
    let nombreOrigen = info.linea.ruta.origen.nombre;
    let nombreDestino = info.linea.ruta.destino.nombre;

    //Hook de navegacion
    let navigate = useNavigate();

    return (
        <Card
            margin={"8px"}
            onClick={() => navigate(`/viaje/${info._id}/${tipoViaje}`)}
        >
            <CardHeader textAlign={"center"}>
                <img style={{ width: "50%" }} src={logo} alt={nombreEmp} />
            </CardHeader>
            <CardBody>


                <ul class='timeline'>
                    <li>
                        <span>{nombreOrigen}</span>
                        <span>{info.horaDeSalida}</span>
                    </li>
                    <li data-duracion><span>{`${horasD}h ${minutosD}m`}</span></li>
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
        </Card>
    );
}
