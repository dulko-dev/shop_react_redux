import React from "react";
import ImageLoad from "../image/ImageLoad";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  Container,
  TopBottom,
  LeftArrow,
  Title,
  RightArrow,
  PictureContent,
  Picture,
} from "./caruselaStyle";

import { useState } from "react";
import { useEffect } from "react";
import { caruselaState } from "../../features/caruselaSlice";
import { useSelector } from "react-redux";

function Carusela() {
  const [state, setState] = useState(-100);
  const [last, setLast] = useState(false);
  const amountState = useSelector(caruselaState);
  console.log(amountState);

  useEffect(() => {
    if (state === -100 || state === -800) {
      setLast(false);
    }
  }, [state]);

  const moveForward = () => {
    if (state === -900) return;
    setState(state - 100);
  };

  const transformForward = () => {
    if (state === -900) {
      setLast(true);
      setState(-100);
    }
  };
  const transformBackward = () => {
    if (state === 0) {
      setLast(true);
      setState(-800);
    }
  };
  const moveBackward = () => {
    if (state === 0) return;
    setState(state + 100);
  };

  return (
    <Wrapper>
      <Container>
        <TopBottom>
          <LeftArrow
            icon={faAngleLeft}
            size="2x"
            onClick={moveBackward}
          ></LeftArrow>
          <Title>ostatnio dodane</Title>
          <RightArrow
            icon={faAngleRight}
            size="2x"
            onClick={moveForward}
          ></RightArrow>
        </TopBottom>
        <PictureContent>
          {amountState.map((element, index) => (
            <Picture
              onTransitionEnd={(e) => {
                transformForward(e);
                transformBackward(e);
              }}
              props={last}
              key={index}
              style={{
                transform: `translateX(${state}%)`,
              }}
            >
              <ImageLoad
                image={element.img}
                title={element.txt}
                price={element.price}
                id={element.id}
                amount={element.amount}
              />
            </Picture>
          ))}
        </PictureContent>
      </Container>
    </Wrapper>
  );
}

export default Carusela;
