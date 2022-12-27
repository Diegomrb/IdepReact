import React, { useState, useEffect, useContext } from 'react'
import { myUsuarioContext } from '../../contexts/UsuarioContext';
import { myViajeContext } from '../../contexts/ViajeContext';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';

export function Checkout() {
    const { usuario } = useContext(myUsuarioContext);

    return (
        <Stack flexDirection={"column"} gap={3} height={"100vh"} maxHeight={"100%"}>

        </Stack>
    )
}
