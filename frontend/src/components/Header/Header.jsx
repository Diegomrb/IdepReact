import React from "react";
import "./Header.css";
import { Button, Box, ButtonGroup, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Logo from "../../img/logoIdep.png";

export function Header() {
  let navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      py={5}
      /* mb={-5} */
      className="header-container"
    >
      <ButtonGroup gap="14">
        <Button onClick={() => navigate(`/`)} colorScheme="transparent">
          <img src={Logo} alt="logo" />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
