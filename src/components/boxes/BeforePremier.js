import React from "react";
import gear from "../../assets/before_premier/gear.jpg";
import judgement from "../../assets/before_premier/judgement.jpg";
import oddworld from "../../assets/before_premier/oddworld.jpg";
import terminator from "../../assets/before_premier/terminator.jpg";

import cris from "../../assets/before_premier/cris-tales.jpg";
import dark from "../../assets/before_premier/dark.jpg";
import far from "../../assets/before_premier/far-cry.jpg";
import strange from "../../assets/before_premier/life-strange.jpg";

import football from "../../assets/before_premier/football.png";
import rome from "../../assets/before_premier/rome.jpg";
import surviving from "../../assets/before_premier/surviving.jpg";
import biomutant from "../../assets/before_premier/biomutant.jpg";

import {
  Wrapper,
  Container,
  PlaystationGameWrapper,
  XboxGameWrapper,
  SideLeft,
  PlaystationBox,
  XboxBox,
  WindowsBox,
  Image,
  SideRight,
  TitleSideRight,
  PriceSideRight,
  TitleLogoRow,
  Title,
  Logo,
  Text,
  WIndowsGameWrapper,
  BasketIcon,
  PriceBasketWrapper,
} from "./beforeStyle";
import {
  faPlaystation,
  faXbox,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

function BeforePremier() {
  return (
    <Wrapper>
      <Container>
        <PlaystationBox>
          <TitleLogoRow>
            <Title>playstation</Title>
            <Logo icon={faPlaystation} />
          </TitleLogoRow>
          <Text>PreOrder</Text>
        </PlaystationBox>
        <XboxBox>
          <TitleLogoRow>
            <Title>xbox</Title>
            <Logo icon={faXbox} />
          </TitleLogoRow>
          <Text>PreOrder</Text>
        </XboxBox>
        <WindowsBox>
          <TitleLogoRow>
            <Title>pc</Title>
            <Logo icon={faWindows} />
          </TitleLogoRow>
          <Text>PreOrder</Text>
        </WindowsBox>
        <PlaystationGameWrapper column rowOne>
          <SideLeft>
            <Image src={gear} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Guilty Gear Strive</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$219</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </PlaystationGameWrapper>
        <PlaystationGameWrapper column rowTwo>
          <SideLeft>
            <Image src={judgement} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Judgment</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$159.9</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </PlaystationGameWrapper>
        <PlaystationGameWrapper column rowThree>
          <SideLeft>
            <Image src={oddworld} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Oddworld Soulstorm Day One Edition</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$179</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </PlaystationGameWrapper>
        <PlaystationGameWrapper column>
          <SideLeft>
            <Image src={terminator} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Terminator Resistance Enhanced</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$199.9</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </PlaystationGameWrapper>
        <XboxGameWrapper column rowOne>
          <SideLeft>
            <Image src={cris} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Cris Tales</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$159</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </XboxGameWrapper>
        <XboxGameWrapper column rowTwo>
          <SideLeft>
            <Image src={dark} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>
              Dungeons & Dragons Dark Alliance Steelbook Edition
            </TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$229.9</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </XboxGameWrapper>
        <XboxGameWrapper column rowThree>
          <SideLeft>
            <Image src={far} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Far Cry 6 Gold Edition</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$349</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </XboxGameWrapper>
        <XboxGameWrapper column rowFour>
          <SideLeft>
            <Image src={strange} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Life Is Strange True Colors</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$199.99</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </XboxGameWrapper>
        <WIndowsGameWrapper column rowOne>
          <SideLeft>
            <Image src={football} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>We Are Football</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$139</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </WIndowsGameWrapper>
        <WIndowsGameWrapper column rowTwo>
          <SideLeft>
            <Image src={rome} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Imperator Rome Premium Edition</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$169.9</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </WIndowsGameWrapper>
        <WIndowsGameWrapper column rowThree>
          <SideLeft>
            <Image src={surviving} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>TSurviving the Aftermath</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$119.9</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </WIndowsGameWrapper>
        <WIndowsGameWrapper column rowFour>
          <SideLeft>
            <Image src={biomutant} />
          </SideLeft>
          <SideRight>
            <TitleSideRight>Biomutant</TitleSideRight>
            <PriceBasketWrapper>
              <PriceSideRight>$229.9</PriceSideRight>
              <BasketIcon icon={faCartArrowDown} />
            </PriceBasketWrapper>
          </SideRight>
        </WIndowsGameWrapper>
      </Container>
    </Wrapper>
  );
}

export default BeforePremier;
