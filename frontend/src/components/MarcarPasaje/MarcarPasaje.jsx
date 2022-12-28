import React, { useEffect, useState, useContext } from "react";
import { Select, Stack, Box, useDisclosure, Heading } from "@chakra-ui/react";
import { Button, Input } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { myViajeContext } from "../../contexts/ViajeContext";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000";

export function MarcarPasaje() {
  let navigate = useNavigate();
  const { addPasaje } = useContext(myViajeContext);
  const [localidades, setLocalidades] = useState([]);
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [idaVuelta, setIdaVuelta] = useState(true);
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  useEffect(() => {
    fetch(`${url}/localidades`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setLocalidades(datos);
      });
  }, []);

  function irAViajes() {
    fetch(`${url}/viajes?origenId=${origen}&destinoId=${destino}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        !datos.length ? setMostrarAlerta(true) : setMostrarAlerta(false);

        if (datos.length) {
          addPasaje({
            localidades,
            origen,
            destino,
            nombreOrigen: datos[0].linea.ruta.origen.nombre,
            nombreDestino: datos[0].linea.ruta.destino.nombre,
            idaVuelta,
            inicio,
            fin,
            viajes: datos,
          }); // Subimos objeto con todo el pasaje y al llenarlo, saltamos al siguiente paso
          navigate("/viajes/ida");
        }
      });
  }

  return (
    <Stack margin={3} direction={["column"]} gap={3} style={{ height: "100vh" }}>
      <Heading as="h2" size="xl" noOfLines={1}>
        ¿A dónde quieres viajar?
      </Heading>
      <Stack direction="row" spacing={4}>
        <Button
          colorScheme="linkedin"
          onClick={() => setIdaVuelta(false)}
          variant={!idaVuelta ? "solid" : "outline"}
        >
          Solo ida
        </Button>
        <Button
          colorScheme="linkedin"
          onClick={() => setIdaVuelta(true)}
          variant={idaVuelta ? "solid" : "outline"}
        >
          Ida y vuelta
        </Button>
      </Stack>
      <Select onChange={(e) => setOrigen(e.target.value)} placeholder="Origen">
        {localidades.map((item) => (
          <option key={item["_id"]} value={item["_id"]}>
            {item.nombre}, {item.departamento}.
          </option>
        ))}
      </Select>
      <Select
        onChange={(e) => setDestino(e.target.value)}
        placeholder="Destino"
      >
        {localidades.map((item) => (
          <option key={item["_id"]} value={item["_id"]}>
            {item.nombre}, {item.departamento}.
          </option>
        ))}
      </Select>
      <Stack direction={"row"}>
        <Input
          placeholder="dd/mm/aaaa"
          size="md"
          type="datetime-local"
          onChange={(e) => setInicio(e.target.value)}
        />
        <Input
          placeholder="dd/mm/aaaa"
          size="md"
          type="datetime-local"
          onChange={(e) => setFin(e.target.value)}
        />
      </Stack>
      <Button onClick={irAViajes} colorScheme="linkedin">
        Buscar Pasaje
      </Button>

      {mostrarAlerta && <Alerta mostrar={setMostrarAlerta} />}
    </Stack>
  );
}

function Alerta({ mostrar }) {
  return (
    <Alert status="info">
      <AlertIcon />
      <Box>
        <AlertTitle>Ups!</AlertTitle>
        <AlertDescription>
          Parece que no tenemos pasajes disponibles para este origen y
          destino...
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={() => mostrar(false)}
      />
    </Alert>
  );
}
