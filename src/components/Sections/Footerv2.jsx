import React, { Component } from "react";
import Fade from "react-reveal";
import '../../style/wheather/weather.css'
import { Link } from "react-scroll";
import Weather from "../Elements/Weather";
export default function Footerv2({ themeState }) {

  //jason 
  const resumeData = {
    social: [
      {
        name: "facebook",
        url: "",
        className: "fa-brands fa-facebook whiteColor"
      },


      {
        name: "instagram",
        url: "",
        className: "fa-brands fa-instagram whiteColor"
      },
      {
        name: "youtube",
        url: "",
        className: "fa-brands fa-youtube whiteColor"
      }
    ]
  }

  const networks = resumeData.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }
  return (
    <footer className="App calor " >
      <div className="row " >

        <div className="twelve columns">
          <Fade bottom>
            <ul className="social-links">{networks}</ul>
          </Fade>
          <ul className="copyright">
            <Fade bottom>
              <li>&copy; Copyright {getCurrentYear()} Fundacion Emprende Hoy</li>
            </Fade>
          </ul>

        </div>

        <div className="twelve ">
          <Weather />
        </div>

        <Chevron />
      </div>
    </footer>
  );
}


const Chevron = () => {
  return (
    <Fade bottom>
      <div id="go-top">
        <Link to="home" smooth duration={1000} offset={-50}>
          <a className="smoothscroll " style={{ display: "grid", placeItems: "center" }}
            title="Back to Top">


            <i class="fa-solid fa-chevron-up"></i>
          </a>
        </Link>
      </div>
    </Fade>
  )
}