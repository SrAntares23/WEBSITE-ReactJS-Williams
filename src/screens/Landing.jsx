import React, { useEffect, Component, useState, Suspense, lazy } from "react";
// Sections
//styles

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import WhatsappFAB from "../components/Buttons/whatsappFAB";
import Loader from '../components/Elements/Loader'
import { green, grey } from '@mui/material/colors';
import RadioButton from "../components/Buttons/RadioButton";
//icons
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";
import { useAppContext } from "../Utils/AppContext";
//sections in lazy mode
const LazyTopNavbar = lazy(() => import("../components/Nav/TopNavbar"));
const LazyHeader = lazy(() => import("../components/Sections/Header"));
const LazyServices = lazy(() => import("../components/Sections/Services"));
const LazyProjects = lazy(() => import("../components/Sections/Projects"));
const LazyBlog = lazy(() => import("../components/Sections/Blog"));
const LazyContact = lazy(() => import("../components/Sections/Contact"));
const LazyFooter = lazy(() => import("../components/Sections/Footerv2"));
const LazyGallery = lazy(() => import("../components/Elements/GallerySlider"))
const LazyFacebookPost = lazy(() => import("../components/Elements/FacebookPostsBox"))
const LazyTestimonial = (lazy(() => import("../components/Elements/TestimonialSlider")))


export default function Landing() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const { setWeatherData } = useAppContext();
  const api = {
    key: "63e442589b5acb21a4f447908f39ce8e",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [wather, setWeather] = useState({});
  // Función para establecer una cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  let lat = "13.6929"
  let long = "-89.2182"
  let data="el salvador"

  const getWeather = () => {
    fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      });
  }

  // Función para manejar el cambio de tema
  function handleChangeTheme() {
    const newModoOscuro = !modoOscuro; // Cambiar el valor del modo oscuro
    setModoOscuro(newModoOscuro); // Actualizar el estado local de React
    setCookie('modoOscuro', newModoOscuro, 30); // Guardar el valor en la cookie

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

  return (
    <>
      <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
        <div className="centered-div">
          <div className="spinner">
            <span>Cargando...</span>
            <div className="half-spinner"></div>
          </div>
        </div>
      </div>}>

        <LazyTopNavbar themeState={modoOscuro} />
        <LazyHeader themeState={modoOscuro} />
        <LazyServices themeState={modoOscuro} />
        <LazyProjects themeState={modoOscuro} />
        <LazyBlog themeState={modoOscuro} />
        <LazyGallery themeState={modoOscuro} />
        <LazyTestimonial themeState={modoOscuro} />
        <LazyContact themeState={modoOscuro} />
        <LazyFooter themeState={modoOscuro} />
      <WhatsappFAB  /> 


      </Suspense>

      <Box
        sx={{
          '& > :not(style)': { m: 1 },
          backgroundColor: "transparent",

          position: 'fixed',
          right: '20px', // Ajusta la posición del elemento flotante desde el lado derecho
          bottom: '20px', // Ajusta la posición vertical desde abajo
        }}>
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

    </>
  );
}



