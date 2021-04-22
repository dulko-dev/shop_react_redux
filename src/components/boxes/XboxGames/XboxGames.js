import React from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  XboxGameWrapper,
  SideLeft,
  SideRight,
  TitleSideRight,
  PriceBasketWrapper,
  PriceSideRight,
  BasketIcon,
  BasketAmount,
  Image,
} from "./xboxGamesStyle";
import { removeXbox } from "../../../features/premierSlice";
import { add, addprice } from "../../../features/amountSlice";
import { addItem } from "../../../features/addItemSlice";
import { useDispatch } from "react-redux";

function XboxGames({ row, img, txt, price, id, amount }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add());
    dispatch(addprice(price));
    dispatch(
      addItem({
        title: txt,
        id: id,
        img: img,
        price: price,
      })
    );
    dispatch(removeXbox({ id: id, amount: amount }));
  };
  return (
    <XboxGameWrapper column style={{ gridRow: `${row}` }}>
      <SideLeft>
        <Image src={img} />
      </SideLeft>
      <SideRight>
        <TitleSideRight>{txt}</TitleSideRight>
        <PriceBasketWrapper>
          <PriceSideRight>${price}</PriceSideRight>
          <BasketIcon icon={faCartArrowDown} onClick={handleAdd} />
          <BasketAmount>Amount: {amount}</BasketAmount>
        </PriceBasketWrapper>
      </SideRight>
    </XboxGameWrapper>
  );
}

export default XboxGames;
