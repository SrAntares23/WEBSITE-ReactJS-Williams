import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author, imageUrl, postUrl, theme }) {
  const postId = postUrl.split('_')[1]; // Obtener la segunda parte de la división
  const splitURL = "https://www.facebook.com/100095302772356/posts/" + postId

  return (
    <WrapperBtn className="animate pointer" onClick={() => window.open(splitURL, "_blank")} >
      <Wrapper className={` radius8 shadow ${theme}`}>
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
        {imageUrl && <img src={imageUrl} alt="Imagen del artículo" />} {/* Agrega la imagen si hay una URL */}
        <p className="font13 extraBold pd20">  Hace {author}</p>
        {/** <div className="flex">
        <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
      </div> */}
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;

