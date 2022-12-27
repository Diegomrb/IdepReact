import React from "react";
import "./Splash.css";
import { Button, Box, Stack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Slogan from "../../img/slogan.png";

export function Splash() {
  let navigate = useNavigate();
  return (
    <Stack
      margin={3}
      direction={["column"]}
      gap={3}
      style={{ height: "100vh" }}
    >
      <Box
        boxSize="sm"
        display={"flex"}
        justifyContent={"center"}
        height={"auto"}
      >
        <Image src={Slogan} alt="Slogan" />
      </Box>
      <Button onClick={() => navigate(`/registro`)} colorScheme="linkedin">
        Registrarme
      </Button>
      <Button
        onClick={() => navigate(`/login`)}
        colorScheme="linkedin"
        variant="link"
      >
        Ya tengo una cuenta
      </Button>
    </Stack>
  );
}
