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
import firstImage from "../../assets/last_add/bond.jpg";
import secondImage from "../../assets/last_add/fitness.jpg";
import thirdImage from "../../assets/last_add/hunter.jpg";
import fourthImage from "../../assets/last_add/mittopia.jpg";
import fivethImage from "../../assets/last_add/nightmares2.jpg";
import sixthImage from "../../assets/last_add/ratchet.jpg";
import seventhImage from "../../assets/last_add/ride4.jpg";
import eighthImage from "../../assets/last_add/yakuza.jpg";
import { useState } from "react";
import { useEffect } from "react";

function Carusela() {
  const [state, setState] = useState(-100);
  const [last, setLast] = useState(false);
  const [pictureArray] = useState([
    {
      img: eighthImage,
      txt: "Yakuza Like a Dragon",
      price: 200,
    },
    {
      img: firstImage,
      txt: "007 Quantum of Solace ",
      price: 9.99,
    },
    {
      img: secondImage,
      txt: "Fitness Boxing",
      price: 35.5,
    },
    {
      img: thirdImage,
      txt: "Monster Hunter Rise",
      price: 120,
    },
    {
      img: fourthImage,
      txt: "Miitopia",
      price: 159.99,
    },
    {
      img: fivethImage,
      txt: "Little Nightmares II ",
      price: 200.59,
    },
    {
      img: sixthImage,
      txt: " Ratchet & Clank: Rift Apart",
      price: 210,
    },
    {
      img: seventhImage,
      txt: "Ride 4",
      price: 40,
    },
    {
      img: eighthImage,
      txt: "Yakuza Like a Dragon",
      price: 200,
    },
    {
      img: firstImage,
      txt: "007 Quantum of Solace",
      price: 9.99,
    },
  ]);

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
          {pictureArray.map((element, index) => (
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
              />
            </Picture>
          ))}
        </PictureContent>
      </Container>
    </Wrapper>
  );
}

export default Carusela;
