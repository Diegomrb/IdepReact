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
import { useNavigate } from "react-router-dom";
import { myViajeContext } from "../../contexts/ViajeContext";
import moment from "moment";
import "./Viajes.css";

export const Viajes = () => {
  const { pasaje } = useContext(myViajeContext);
  let origen = pasaje.localidades.filter(
    (item) => item["_id"] == pasaje.origen
  )[0];
  let destino = pasaje.localidades.filter(
    (item) => item["_id"] == pasaje.destino
  )[0];
  return (
    <div>
      <Stack /* backgroundColor={} */ margin={"8px"} direction={["column"]}>
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
              type="datetime-local"
              disabled
            />
          </FormControl>
          <FormControl>
            <FormLabel>Fecha fin</FormLabel>
            <Input
              variant="outline"
              placeholder="Destino"
              value={pasaje.fin}
              type="datetime-local"
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
  // tiempo duracion calculado para que salga con formato HH:MM
  let durTotalHoras = moment
    .duration(info.horaDeSalida)
    .add(info.duracion, "minutes")
    .asHours();
  let durTotalMinutos = (durTotalHoras - Math.trunc(durTotalHoras)) * 60;
  const durTotalString = `${Math.trunc(durTotalHoras)}:${durTotalMinutos}`;
  //----------------------------------------------

  // Tiempo duracion de minutos a horas y minutos:
  let segundosP = Number(info.duracion) * 60;
  const horasD = Math.floor(segundosP / 0xe10).toString();
  const minutosD = (Math.floor(segundosP / 0x3c) % 0x3c).toString();

  //variables para facilitar el manejo de las mismas
  let logo = info.linea.empresa.logo;
  let nombreEmp = info.linea.empresa.nombre;

  //Hook de navegacion
  let navigate = useNavigate();

<<<<<<< Updated upstream
  return (
    <Card margin={"8px"} onClick={() => navigate(`/`)}>
      <CardHeader textAlign={"center"}>
        <Text>
          {logo} / {nombreEmp}
        </Text>
      </CardHeader>
      <CardBody>
        <ul className="timeline">
          <li>{info.horaDeSalida}</li>
          <li>{`${horasD}h ${minutosD}m`}</li>
          <li>{durTotalString}</li>
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
=======

    return (
        <Card margin={"8px"} onClick={() => navigate(`/viaje/${info._id}`)}>
            <CardHeader textAlign={"center"}>
                <Text>
                    {logo} / {nombreEmp}
                </Text>
            </CardHeader>
            <CardBody>
                <ul className="timeline">
                    <li >{info.horaDeSalida}</li>
                    <li >{`${horasD}h ${minutosD}m`}</li>
                    <li >{durTotalString}</li>
                </ul>
            </CardBody>
            <CardFooter backgroundColor={"teal.300"} justifyContent="center" color={"white"}>
                <Text>Precio: $ {info.linea.precio}</Text>
            </CardFooter>
        </Card>
    )
}
>>>>>>> Stashed changes
