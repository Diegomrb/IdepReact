import React from "react";
import "./Usuarios.css";
import { Button, Icon, Stack, Heading } from "@chakra-ui/react";

import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";

export function Usuarios() {
  return (
    <Stack margin={3} gap={3} style={{ height: "100vh" }}>
      <Heading as="h2" size="xl" noOfLines={1}>
        Usuario
      </Heading>
      <Stack>
        <Button colorScheme="linkedin">
          <Icon
            as={MdOutlineNotificationsNone}
            boxSize={"1.5em"}
            variant="outline"
            color={"#F4CB29"}
          />
          Notificaciones
        </Button>
        <Button colorScheme="linkedin">
          <Icon
            as={MdOutlinePayment}
            boxSize={"1.5em"}
            variant="outline"
            color={"#F4CB29"}
          />
          Métodos de pago
        </Button>
        <Button colorScheme="linkedin">
          <Icon
            as={MdOutlineSecurity}
            boxSize={"1.5em"}
            variant="outline"
            color={"#F4CB29"}
          />
          Seguridad
        </Button>
        <Button colorScheme="linkedin">
          <Icon
            as={AiOutlineLogout}
            boxSize={"1.5em"}
            variant="outline"
            color={"#F4CB29"}
          />
          Cerrar sesión
        </Button>
      </Stack>
    </Stack>
  );
}
