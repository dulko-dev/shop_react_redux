import React from "react";
import styled from "styled-components";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
const ImageContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
  padding: 20px 0;
  height: 250px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const Title = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;
const ShoppingContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1/1;
  font-size: 1.5em;
  padding: 20px 0;
`;
const Price = styled.p`
  grid-column: 1/2;
  grid-row: 1/1;
  color: #BA1200;
  justify-self:end;
  padding-right:30px;

`;
const Basket = styled.span`
  grid-column: 2/3;
  grid-row: 1/1;
  justify-self:start;
  padding-left:30px;
`;

function ImageLoad({ image, title, price }) {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Title>{title}</Title>
      <ShoppingContent>
        <Price>${price}</Price>
        <Basket>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </Basket>
      </ShoppingContent>
    </Wrapper>
  );
}

export default ImageLoad;
