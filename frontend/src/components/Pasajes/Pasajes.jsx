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
        <CardHeader textAlign={"center"}>
          {/* {<img style={{ width: "50%" }} src={logo} alt={nombreEmp} />} */}
        </CardHeader>
        <CardBody className="card-body-container"></CardBody>
      </Card>
    </Stack>
  );
}
