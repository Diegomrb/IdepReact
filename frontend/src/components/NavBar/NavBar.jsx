import React from "react";
import "./NavBar.css";
import { Button, Stack, Box, ButtonGroup } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      py={12}
      mb={2}
      className="navbar-container"
    >
      <ButtonGroup gap="4">
        <Button colorScheme="blackAlpha">Home</Button>
        <Button colorScheme="blackAlpha">Pasaje</Button>
        <Button colorScheme="blackAlpha">Cuenta</Button>
      </ButtonGroup>
    </Box>
  );
}
