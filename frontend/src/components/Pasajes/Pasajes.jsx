import React from "react";
import "./Pasajes.css";
import {
  Button,
  Box,
  ButtonGroup,
  Icon,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

export function Pasajes(info) {
  /* let logo = info.linea.empresa.logo; */
  return (
    <Stack style={{ height: "100vh" }}>
      <Card
        border={"2px solid skyblue"}
        margin={"8px"}
        /* onClick={() => navigate(`/viaje/${info._id}/${tipoViaje}`)} */
      >
        <CardHeader>
          {/* {<img style={{ width: "50%" }} src={logo} alt={nombreEmp} />} */}
          <img
            style={{ width: "50%" }}
            src="/frontend/public/logoEmpresas/cot.png"
            alt="logoempresa"
          />
        </CardHeader>
        <CardBody className="card-body-container">
          <SimpleGrid columns={2} spacing={10}>
            <Text fontSize="3x1" as="b">
              Origen
            </Text>
            <Text fontSize="3x1" as="b">
              Destino
            </Text>
            <Text>Viernes 18 de septiembre</Text>
            <Text>Viernes 18 de septiembre</Text>
            <Text>Pasajero</Text>
            <Text>Monto total</Text>
            <Text>Numero de ticket</Text>
            <Text>Bus</Text>
            <Text>Asientos</Text>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Stack>
  );
}
