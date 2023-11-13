import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import LogoRedondo from '../../assets/img/LogoRedondo.jpeg'
export default function Contact({ themeState }) {
  return (
    <Wrapper id="contact">
      <div className={themeState ? "darkTheme" : 'lightTheme'}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Envianos un mensaje</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Nombre:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Correo:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Mensaje:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                {/**                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
 */}
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput onClick={() => console.log(test)} type="submit" value="Enviar mensaje" className="pointer animate radius8 orangeBg" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img  src={LogoRedondo} alt="office" className="radius6" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









