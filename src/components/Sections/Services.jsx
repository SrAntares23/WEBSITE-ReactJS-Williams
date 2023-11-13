import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import Foto1 from "../../assets/carrusel/gallery1.jpeg"
//for react scroll
import AOS from 'aos'
import "aos/dist/aos.css"; // Importa los estilos de AOS


export default function Services({themeState}) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init()
  }, []);

  return (



    <Wrapper id="services">



      <div className={themeState ? "darkTheme" : 'lightWhiteTheme'} style={{ padding: "60px 0" }}>

        <div className="container">
          {
            /**    <HeaderInfo>
                <h1 className="font40 extraBold">Our Awesome Services</h1>
                <p className="font13">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  <br />
                  labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </HeaderInfo> */
          }
          <ServiceBoxRow className="flex " >

            <ServiceBoxWrapper>
              <div data-aos="fade-right" data-aos-duration="1000">
                <ServiceBox
                  icon="V"
                  title="Vision"
                  subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                />
              </div>
            </ServiceBoxWrapper>


            <ServiceBoxWrapper>
              <div data-aos="fade-left" data-aos-duration="1000">
                <ServiceBox
                  icon="M"
                  title="Mision"
                  subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                />
              </div>
            </ServiceBoxWrapper>


          </ServiceBoxRow>
        </div>
        <div className={themeState ? "darkTheme" : 'lightTheme'}  >
          <div className="container">

            {/* Start of  4 photos box */}
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                {/*<h4 className="font15 semiBold">A few words about company</h4> */}
                <h2 className="font40 extraBold">Nuestra historia</h2>
                <p className="font12">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>

              </AddLeft>
              <AddRight>
                <AddRightInner>
                  {/**Star of animated div */}
                  <div data-aos="fade-left" data-aos-duration="1000">
                    <div className="flexNullCenter">
                      <AddImgWrapp1 className="flexCenter">
                        <img src={Foto1} alt="office" className="slide-in-from-fight" />
                      </AddImgWrapp1>
                      <AddImgWrapp2>
                        <img src={Foto1} alt="office" className="slide-in-from-fight" />
                      </AddImgWrapp2>

                    </div>
                    <div className="flexNullCenter">
                      <AddImgWrapp3>
                        <img src={Foto1} alt="office" className="slide-in-from-fight" />
                      </AddImgWrapp3>

                    </div>
                    <div className="flexNullCenter" style={{ padding: "10px" }}>
                      <AddImgWrapp5>

                        <img src={Foto1} alt="office" className="slide-in-from-fight" />

                      </AddImgWrapp5>
                      <AddImgWrapp6>
                        <img src={Foto1} alt="office" className="slide-in-from-fight" />
                      </AddImgWrapp6>
                    </div>
                  </div>
                  {/**End of animated div */}
                </AddRightInner>
              </AddRight>
            </Advertising>


          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 100%;
  
  padding: 100px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 58%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 40%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 30%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 40%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const AddImgWrapp5 = styled.div`
width: 50%;
margin: 0 5%auto;
img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;
const AddImgWrapp6 = styled.div`
width: 60%;
margin: 0 5%auto;
img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;
const SlideInFromRightAnimation = keyframes`
  from {
    transform: translateX(100%); /* Empieza fuera del contenedor, desplazado hacia la derecha */
  }
  to {
    transform: translateX(0); /* Llega a su posición original */
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f00;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  animation: ${(props) => (props.isVisible ? SlideInFromRightAnimation : "none")} 1s ease;
`;