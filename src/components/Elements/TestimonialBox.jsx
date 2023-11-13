import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";
import { FaQuestion } from 'react-icons/fa'
export default function TestimonialBox({ text, author, themeState }) {
  return (
    <Wrapper className={themeState ? 'darkFooterTheme radius8 flexNullCenter flexColumn' : "lightBlueBg radius8 flexNullCenter flexColumn"}>
      <QuoteWrapper>
        <QuoteIcon />

      </QuoteWrapper>
      <p className=" font16" style={{ alignSelf: 'flex-start' }}>
        <em>{author}</em>
      </p>
      <br />
      <p className=" font13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
  margin-top: 30px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -50px;
`;