import React from "react";
import "./Pasajes.css";
import { Button, Box, ButtonGroup, Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default function Pasajes() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      py={5}
      /* mb={-5} */
      className="navbar-container"
    >
      <ButtonGroup gap="14">
        <Button colorScheme="transparent">
          <Icon as={FaHome} boxSize={"1.5em"} color={"#F4CB29"} />
        </Button>
        <Button colorScheme="transparent">
          <Icon as={FaTicketAlt} boxSize={"1.5em"} color={"#F4CB29"} />
        </Button>
        <Button colorScheme="transparent">
          <Icon as={FaUserAlt} boxSize={"1.5em"} color={"#F4CB29"} />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
