import React from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  WIndowsGameWrapper,
  SideLeft,
  SideRight,
  TitleSideRight,
  PriceBasketWrapper,
  PriceSideRight,
  BasketIcon,
  BasketAmount,
  Image,
} from "./windowsGamesStyle";
import { add, addprice } from "../../../features/amountSlice";
import { addItem } from "../../../features/addItemSlice";
import { removeWindows } from "../../../features/premierSlice";
import { useDispatch } from "react-redux";

function WindowsGames({ row, img, txt, price, id, amount }) {
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
    dispatch(removeWindows({ id: id, amount: amount }));
  };

  return (
    <WIndowsGameWrapper column style={{ gridRow: `${row}` }}>
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
    </WIndowsGameWrapper>
  );
}

export default WindowsGames;
