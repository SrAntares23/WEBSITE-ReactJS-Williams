import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";


import Vs from '../../assets/img/mision-vision/Vision'
import Ms from '../../assets/img/mision-vision/Mision'
export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "M":
      getIcon = <Vs />;
      break;
    case "V":
      getIcon = <Ms />;
      break;

    default:
      getIcon = <RollerIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido horizontalmente */
`;
const IconStyle = styled.div`

  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
const IconWrapper = styled.div`
  width: 100%;
  text-align: center; /* Centra el contenido del IconWrapper horizontalmente */
`;