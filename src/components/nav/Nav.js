import React from "react";
import { faHome, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  Content,
  LeftBox,
  ListOfMenu,
  RightBox,
  Wrapper,
  IconBasket,
  PriceAmount,
  FbIcon,
  FontAwesomeStyle,
  LinkStyle,
  NumbersOfAmount,
} from "./navStyle";

function Nav() {
  return (
    <Wrapper>
      <Content>
        <LeftBox>
          <LinkStyle to="/">
            <ListOfMenu>
              <FontAwesomeStyle icon={faHome} />
            </ListOfMenu>
          </LinkStyle>
          <ListOfMenu>Playstation</ListOfMenu>
          <ListOfMenu>xbox</ListOfMenu>
          <ListOfMenu>nintendo</ListOfMenu>
          <ListOfMenu>gadget</ListOfMenu>
          <ListOfMenu>pc</ListOfMenu>
          <ListOfMenu>promotion</ListOfMenu>
          <ListOfMenu>preorders</ListOfMenu>
        </LeftBox>
        <RightBox>
          <IconBasket icon={faCartArrowDown} />
          <NumbersOfAmount>0</NumbersOfAmount>
          <PriceAmount>$00.00</PriceAmount>
        </RightBox>
        <FbIcon />
      </Content>
    </Wrapper>
  );
}

export default Nav;
