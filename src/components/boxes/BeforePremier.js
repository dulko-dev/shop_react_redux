import React from "react";
import { useSelector } from "react-redux";
import {
  playstationState,
  xboxState,
  windowsState,
} from "../../features/premierSlice";
import WindowsGames from "./WindowsGames/WindowsGames";
import PlaystationGames from "./PlaystationGames/PlaystationGames";
import XboxGames from "./XboxGames/XboxGames";

import {
  Wrapper,
  Container,
  PlaystationBox,
  XboxBox,
  WindowsBox,
  TitleLogoRow,
  Title,
  Logo,
  Text,
} from "./beforeStyle";
import {
  faPlaystation,
  faXbox,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

function BeforePremier() {
  const playAmount = useSelector(playstationState);
  const xboxAmount = useSelector(xboxState);
  const windowsAmount = useSelector(windowsState);

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
          <PlaystationGames
            key={game.id}
            row={game.row}
            img={game.img}
            txt={game.txt}
            price={game.price}
            id={game.id}
            amount={game.amount}
          />
        ))}
        {xboxAmount.map((game) => (
          <XboxGames
            key={game.id}
            row={game.row}
            img={game.img}
            txt={game.txt}
            price={game.price}
            id={game.id}
            amount={game.amount}
          />
        ))}
        {windowsAmount.map((game) => (
          <WindowsGames
            key={game.id}
            row={game.row}
            img={game.img}
            txt={game.txt}
            price={game.price}
            id={game.id}
            amount={game.amount}
          />
        ))}
      </Container>
    </Wrapper>
  );
}

export default BeforePremier;
