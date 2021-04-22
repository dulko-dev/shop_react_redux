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
import { addState, priceState } from "../../features/premierSlice";
import { addItemState } from "../../features/addItemSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  const priceOfOrder = useSelector(priceState);
  const items = useSelector(addItemState);
  const numberOfAmount = useSelector(addState);
  console.log(items);
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
        <Link to="/basket">
          <RightBox>
            <IconBasket icon={faCartArrowDown} />
            <NumbersOfAmount>{numberOfAmount}</NumbersOfAmount>
            <PriceAmount>${priceOfOrder}</PriceAmount>
          </RightBox>
        </Link>
        <FbIcon />
      </Content>
    </Wrapper>
  );
}

export default Nav;
