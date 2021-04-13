import React from "react";
import {
  Wrapper,
  Container,
  TopBottom,
  LeftArrow,
  Title,
  RightArrow,
  PictureContent,
  FirstPicture,
  SecondPicture,
  ThirdPicture,
} from "./caruselaStyle";

function Carusela() {
  return (
    <Wrapper>
      <Container>
        <TopBottom>
          <LeftArrow></LeftArrow>
          <Title></Title>
          <RightArrow></RightArrow>
        </TopBottom>
        <PictureContent>
          <FirstPicture></FirstPicture>
          <SecondPicture></SecondPicture>
          <ThirdPicture></ThirdPicture>
        </PictureContent>
      </Container>
    </Wrapper>
  );
}

export default Carusela;
