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
import { addItem } from "../../features/addItemSlice";

function BeforePremier() {
  const playAmount = useSelector(playstationState);
  const xboxAmount = useSelector(xboxState);
  const windowsAmount = useSelector(windowsState);

  const dispatch = useDispatch();

  const playBasket = (id) => {
    playAmount.map((el) => {
      if (el.id === id) {
        dispatch(addprice(el.price));
        dispatch(add());
        dispatch(
          addItem({
            title: el.txt,
            id: el.id,
            img: el.img,
          })
        );
      }
      return el;
    });
  };
  const xboxBasket = (id) => {
    xboxAmount.map((el) => {
      if (el.id === id) {
        dispatch(addprice(el.price));
        dispatch(add());
        dispatch(
          addItem({
            title: el.txt,
            id: el.id,
            img: el.img,
          })
        );
      }
      return el;
    });
  };
  const windowsBasket = (id) => {
    windowsAmount.map((el) => {
      if (el.id === id) {
        dispatch(addprice(el.price));
        dispatch(add());
        dispatch(
          addItem({
            title: el.txt,
            id: el.id,
            img: el.img,
          })
        );
      }
      return el;
    });
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
          <PlaystationGameWrapper
            column
            style={{ gridRow: `${game.row}` }}
            key={game.id}
          >
            <SideLeft>
              <Image src={game.img} />
            </SideLeft>
            <SideRight>
              <TitleSideRight>{game.txt}</TitleSideRight>
              <PriceBasketWrapper>
                <PriceSideRight>{game.price}</PriceSideRight>
                <BasketIcon
                  icon={faCartArrowDown}
                  onClick={() => playBasket(game.id)}
                />
              </PriceBasketWrapper>
            </SideRight>
          </PlaystationGameWrapper>
        ))}
        {xboxAmount.map((game) => (
          <XboxGameWrapper
            column
            style={{ gridRow: `${game.row}` }}
            key={game.id}
          >
            {console.log(game.row)}
            <SideLeft>
              <Image src={game.img} />
            </SideLeft>
            <SideRight>
              <TitleSideRight>{game.txt}</TitleSideRight>
              <PriceBasketWrapper>
                <PriceSideRight>${game.price}</PriceSideRight>
                <BasketIcon
                  icon={faCartArrowDown}
                  onClick={() => xboxBasket(game.id)}
                />
              </PriceBasketWrapper>
            </SideRight>
          </XboxGameWrapper>
        ))}
        {windowsAmount.map((game) => (
          <WIndowsGameWrapper
            column
            style={{ gridRow: `${game.row}` }}
            key={game.id}
          >
            <SideLeft>
              <Image src={game.img} />
            </SideLeft>
            <SideRight>
              <TitleSideRight>{game.txt}</TitleSideRight>
              <PriceBasketWrapper>
                <PriceSideRight>${game.price}</PriceSideRight>
                <BasketIcon
                  icon={faCartArrowDown}
                  onClick={() => windowsBasket(game.id)}
                />
              </PriceBasketWrapper>
            </SideRight>
          </WIndowsGameWrapper>
        ))}
      </Container>
    </Wrapper>
  );
}

export default BeforePremier;
