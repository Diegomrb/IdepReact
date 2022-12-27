import React from "react";
import "./NavBar.css";
import { Button, Box, ButtonGroup, Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();
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
        <Button onClick={() => navigate(`/`)} colorScheme="transparent">
          <Icon as={FaHome} boxSize={"1.5em"} color={"#F4CB29"} />
        </Button>
        <Button onClick={() => navigate(`/pasajes`)} colorScheme="transparent">
          <Icon as={FaTicketAlt} boxSize={"1.5em"} color={"#F4CB29"} />
        </Button>
        <Button onClick={() => navigate(`/usuarios`)} colorScheme="transparent">
          <Icon as={FaUserAlt} boxSize={"1.5em"} color={"#F4CB29"} />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
