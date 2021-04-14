import React from "react";
import styled from "styled-components";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ImageContainer = styled.div`
  max-width: 150px;
  margin: 0 auto;
  padding: 30px 0;
`;
const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit:cover;
`;
const Title = styled.h2``;
const ShoppingContent = styled.div``;
const Price = styled.p``;
const Basket = styled.span``;

function ImageLoad({ image, title }) {

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Title>{title}</Title>
      <ShoppingContent>
        <Price>00</Price>
        <Basket>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </Basket>
      </ShoppingContent>
    </Wrapper>
  );
}

export default ImageLoad;
