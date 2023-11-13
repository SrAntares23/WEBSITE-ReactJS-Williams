import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import Logo from '../../assets/img/Logo-FUNDAEH (1).png'
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar({ themeState }) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className={themeState ? "flexCenter animate darkNavTheme" : "flexCenter animate lightWhiteTheme"} style={y > 50 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <a>Logo</a>

          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon strokeColor={themeState ? 'white' : '#0b093b'} />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer hoverHome">
              <Link activeClass="activeHome" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Inicio
              </Link>
            </li>
            <li className="semiBold font15 pointer hoverService">
              <Link activeClass="activeService" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Servicios
              </Link>
            </li>
            <li className="semiBold font15 pointer hoverProject">
              <Link activeClass="activeProject" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Projectos
              </Link>
            </li>
            <li className="semiBold font15 pointer hoverNew">
              <Link activeClass="activeNew" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Noticias
              </Link>
            </li>

            <li className="semiBold font15 pointer hoverGallery">
              <Link activeClass="activeGallery" style={{ padding: "10px 15px" }} to="gallery" spy={true} smooth={true} offset={-80}>
                Galeria
              </Link>
            </li>
            <li className="semiBold font15 pointer hoverFaq">
              <Link activeClass="activeFaq" style={{ padding: "10px 15px" }} to="FAQ" spy={true} smooth={true} offset={-80}>
                FAQ
              </Link>
            </li>
            <li className="semiBold font15 pointer hoverContact">
              <Link activeClass="activeContact" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contacto
              </Link>
            </li>

          </UlWrapper>

        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


