import React from "react";
import "./Login.css";
import {
  Button,
  Box,
  Icon,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Login() {
  let navigate = useNavigate();
  return (
    <Stack margin={3} gap={3} style={{ height: "100vh" }}>
      <Heading as="h2" size="xl" noOfLines={1}>
        Inicia sesión en Idep
      </Heading>
      <Box>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl margin-top={"2em"}>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" />
        </FormControl>
      </Box>
      <Button onClick={() => navigate(`/`)} colorScheme="linkedin">
        Ingresar
      </Button>
      <Button
        onClick={() => navigate(`/preregistro`)}
        colorScheme="linkedin"
        variant="link"
      >
        Crear una cuenta
      </Button>
    </Stack>
  );
}
