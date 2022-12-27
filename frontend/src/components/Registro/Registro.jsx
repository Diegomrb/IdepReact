import React from "react";
import "./Registro.css";
import {
  Button,
  Box,
  Text,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Registro() {
  let navigate = useNavigate();
  return (
    <Stack margin={3} gap={3} style={{ height: "100vh" }}>
      <Heading as="h2" size="xl" noOfLines={1}>
        Registrate en Idep
      </Heading>
      <WrapItem textAlign="center">
        <Avatar
          size="2xl"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
        />
      </WrapItem>
      <Box>
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

        <FormControl margin-top={"2em"}>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" />
        </FormControl>

        <FormControl margin-top={"2em"}>
          <FormLabel>Repite tu contraseña</FormLabel>
          <Input type="password" />
        </FormControl>
      </Box>
      <Button onClick={() => navigate(`/`)} colorScheme="linkedin">
        Crear
      </Button>
      <Button
        onClick={() => navigate(`/preregistro`)}
        colorScheme="linkedin"
        variant="link"
      >
        Iniciar sesión
      </Button>
    </Stack>
  );
}
