import React from "react";
import "./PreRegistro.css";
import {
  Button,
  Box,
  ButtonGroup,
  Icon,
  Text,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

export function PreRegistro() {
  let navigate = useNavigate();
  return (
    <Stack margin={3} gap={3} style={{ height: "100vh" }}>
      <Heading as="h2" size="xl" noOfLines={1}>
        Crea una cuenta en Idep
      </Heading>
      <Text fontSize="sm">
        Crea una cuenta para poder comprar pasajes y tener registro de todos tus
        viajes.
      </Text>
      <Stack>
        <Button
          onClick={() => navigate(`/registro`)}
          colorScheme="linkedin"
          variant="outline"
        >
          <Icon as={FaUserAlt} boxSize={"1.5em"} />
          Registrarme con mi email
        </Button>
        <Button
          onClick={() => navigate(`/registro`)}
          colorScheme="linkedin"
          variant="outline"
        >
          <Icon as={AiFillFacebook} boxSize={"1.5em"} />
          Registrarme con Facebook
        </Button>
        <Button
          onClick={() => navigate(`/registro`)}
          colorScheme="linkedin"
          variant="outline"
        >
          <Icon as={AiFillApple} boxSize={"1.5em"} />
          Registrarme con Apple
        </Button>
        <Button
          onClick={() => navigate(`/registro`)}
          colorScheme="linkedin"
          variant="outline"
        >
          <Icon as={AiFillGoogleCircle} boxSize={"1.5em"} />
          Registrarme con Google
        </Button>
      </Stack>
      <Text fontSize="xs" textAlign="center">
        Al registrarte, aceptas nuestros Términos del servicio y confirmas haber
        leído nuestra Política de privacidad para saber cómo recopilamos,
        utilizamos y compartimos tus datos.
      </Text>
      <Text textAlign="center">
        ¿Ya tienes una cuenta?
        <Button
          onClick={() => navigate(`/registro`)}
          colorScheme="linkedin"
          variant="link"
        >
          Iniciar sesión
        </Button>
      </Text>
    </Stack>
  );
}
