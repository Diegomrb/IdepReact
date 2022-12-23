import React, { useEffect, useState } from "react";
import { Select, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const url = "http://localhost:3000";

export function MarcarPasaje() {
  const [localidades, setLocalidades] = useState([]);
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
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
        /* setLocalidades(datos); */
      });
  }

  return (
    <Stack direction={["column", "row"]}>
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

      <Button onClick={irAViajes} colorScheme="blackAlpha">
        Buscar Pasaje
      </Button>
    </Stack>
  );
}
