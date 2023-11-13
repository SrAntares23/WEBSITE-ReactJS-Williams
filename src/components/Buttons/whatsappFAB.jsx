import React, { useState, useEffect } from 'react'
import cn from 'classnames';
import { MdAdd } from 'react-icons/md'


import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { green, grey } from '@mui/material/colors';
import RadioButton from './RadioButton';

export default function WhatsappFAB({ initialThemeState }) {

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const phoneNumber = "50364285647";
    const message = '¡Hola! Estoy interesado en conocer mas.';

    const whatsappUrl = isMobile
        ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        : `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    ;

    const handleOpenWhatsapp = () => {

        window.open(whatsappUrl, '_blank');


    }



    //state for cookie
    const [modoOscuro, setModoOscuro] = useState(false);



    // Función para establecer una cookie
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }



    // Función para manejar el cambio de tema
    function handleChangeTheme() {
        const newModoOscuro = !modoOscuro; // Cambiar el valor del modo oscuro
        setModoOscuro(newModoOscuro); // Actualizar el estado local de React
        setCookie('modoOscuro', newModoOscuro, 30); // Guardar el valor en la cookie
        console.log("modo oscuro", initialThemeState)
        console.log("modo oscuro 2", newModoOscuro)
    }

    // Función para obtener el valor de una cookie
    function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
        return cookieValue ? cookieValue[2] : null;
    }

    // Leer el valor de la cookie al cargar el componente
    useEffect(() => {
        const savedModoOscuro = getCookie('modoOscuro');
        if (savedModoOscuro !== null) {
            setModoOscuro(savedModoOscuro === 'true'); // Convertir a boolean
        }

    }, []);

    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };

    const fabGreenStyle = {
        color: 'common.white',
        bgcolor: green[500],
        '&:hover': {
            bgcolor: green[600],
        },
    };
    const fabs = [
        ,
        {
            color: 'inherit',
            sx: { ...fabStyle, ...fabGreenStyle },
            label: 'WhatSapp',
        },
    ];
    return (
        <Box
            sx={{
                '& > :not(style)': { m: 1 },
                backgroundColor: "transparent",

                position: 'fixed',
                right: '20px', // Ajusta la posición del elemento flotante desde el lado derecho
                bottom: '20px', // Ajusta la posición vertical desde abajo
            }}
        >
            <Fab
                aria-label={"WhatSapp"}
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    color: 'common.white',
                    bgcolor: green[500], '&:hover': {
                        bgcolor: green[600],
                    },
                }}
                onClick={handleOpenWhatsapp}

            >
                <WhatsAppIcon />
            </Fab>
            <Fab
                aria-label={"Modo oscuro"}
                sx={{
                    position: 'absolute',
                    bottom: 86,
                    right: 16,
                    bgcolor: modoOscuro ? grey[700] : grey[50],
                    '&:hover': {
                        bgcolor: modoOscuro ? grey[800] : grey[100],
                    },
                }}

                onChange={handleChangeTheme}
            >
                <RadioButton initialChecked={modoOscuro} />
            </Fab>

        </Box>

    );
}
