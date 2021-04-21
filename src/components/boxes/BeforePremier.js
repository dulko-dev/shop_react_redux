import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  playstationState,
  xboxState,
  windowsState,
} from "../../features/premierSlice";
import { add, addprice } from "../../features/amountSlice";
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
  const playAmount = useSelector(playstationState);
  const xboxAmount = useSelector(xboxState);
  const windowsAmount = useSelector(windowsState);

  const dispatch = useDispatch();

  const handleBasket = () => {
    dispatch(add());
  };

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
        {playAmount.map((game) => (
          <PlaystationGameWrapper column>
            <SideLeft>
              <Image src={game.img} />
            </SideLeft>
            <SideRight>
              <TitleSideRight>{game.txt}</TitleSideRight>
              <PriceBasketWrapper>
                <PriceSideRight>{game.price}</PriceSideRight>
                <BasketIcon icon={faCartArrowDown} onClick={handleBasket} />
              </PriceBasketWrapper>
            </SideRight>
          </PlaystationGameWrapper>
        ))}
        {xboxAmount.map((game) => (
          <XboxGameWrapper column style={{ gridRow: `${game.row}` }}>
            {console.log(game.row)}
            <SideLeft>
              <Image src={game.img} />
            </SideLeft>
            <SideRight>
              <TitleSideRight>{game.txt}</TitleSideRight>
              <PriceBasketWrapper>
                <PriceSideRight>${game.price}</PriceSideRight>
                <BasketIcon icon={faCartArrowDown} />
              </PriceBasketWrapper>
            </SideRight>
          </XboxGameWrapper>
        ))}
        {windowsAmount.map((game) => (
          <WIndowsGameWrapper column style={{ gridRow: `${game.row}` }}>
            <SideLeft>
              <Image src={game.img} />
            </SideLeft>
            <SideRight>
              <TitleSideRight>{game.txt}</TitleSideRight>
              <PriceBasketWrapper>
                <PriceSideRight>${game.price}</PriceSideRight>
                <BasketIcon icon={faCartArrowDown} />
              </PriceBasketWrapper>
            </SideRight>
          </WIndowsGameWrapper>
        ))}
      </Container>
    </Wrapper>
  );
}

export default BeforePremier;
