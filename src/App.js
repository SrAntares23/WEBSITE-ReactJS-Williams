import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import Blog1 from "./screens/Blog1.jsx";
import WhatsappFAB from "./components/Buttons/whatsappFAB.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importamos BrowserRouter y las otras utilidades de React Router
import Test1 from "./screens/Test1.jsx";
import Test2 from "./screens/Test2.jsx";
import { AppProvider } from "./Utils/AppContext.js";
import Weather from "./components/Elements/Weather.jsx";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog1 />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/w" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
