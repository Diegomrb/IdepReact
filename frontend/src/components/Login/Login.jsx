import React, { useState, useEffect, useContext } from "react";
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
import { myUsuarioContext } from "../../contexts/UsuarioContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { loguearUsuario, usuario } = useContext(myUsuarioContext);

  let navigate = useNavigate();

  async function loginUsuario() {
    let loginResp = await loguearUsuario(email, contrasena);
    console.log(loginResp)
    if (loginResp) {
      navigate("/home");
    } else {
      // arrojar un error o notificacion;
      return null
    }
  }
  return (
    <Stack margin={3} gap={3} style={{ height: "100vh" }}>
      <Heading as="h2" size="xl" noOfLines={1}>
        Inicia sesión en Idep
      </Heading>
      <Box>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <FormControl margin-top={"2em"}>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </FormControl>
      </Box>
      <Button onClick={loginUsuario} colorScheme="linkedin">
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
