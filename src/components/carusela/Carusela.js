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
  const [state, setState] = useState(0);
  const [last, setLast] = useState(false);
  const [pictureArray] = useState([
    {
      img: firstImage,
      txt: "bond",
    },
    {
      img: secondImage,
      txt: "fitness",
    },
    {
      img: thirdImage,
      txt: "hunter",
    },
    {
      img: fourthImage,
      txt: "mittopia",
    },
    {
      img: fivethImage,
      txt: "nightmare2",
    },
    {
      img: sixthImage,
      txt: "ratchet",
    },
    {
      img: seventhImage,
      txt: "ride4",
    },
    {
      img: eighthImage,
      txt: "yakuza",
    },
    {
      img: firstImage,
      txt: "bond",
    },
  ]);

  useEffect(() => {
    if (state === -800) {
      setLast(true);
    } else {
      setLast(false);
    }
  }, [state]);

  const moveForward = () => {
    if (state === -800) {
      setState(-100);
    } else {
      setState(state - 100);
    }
  };

  const moveBackward = () => {
    if (state === 100) {
      setState(0);
    } else {
      setState(state + 100);
    }
  };
  console.log(state);
  console.log(last);
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
              key={index}
              style={{
                transform: `translateX(${state}%)`,
                transition: last ? "none" : "all .3s",
              }}
            >
              <ImageLoad image={element.img} title={element.txt} />
            </Picture>
          ))}
        </PictureContent>
      </Container>
    </Wrapper>
  );
}

export default Carusela;
