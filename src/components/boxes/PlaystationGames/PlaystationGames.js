import React from "react";
import {
  PlaystationGameWrapper,
  SideLeft,
  SideRight,
  TitleSideRight,
  PriceBasketWrapper,
  PriceSideRight,
  BasketIcon,
  BasketAmount,
  Image,
} from "./playstationGamesStyle";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { addprice } from "../../../features/premierSlice";
import { add } from "../../../features/premierSlice";
import { addItem, counterState, counter } from "../../../features/addItemSlice";
import { removePlay } from "../../../features/premierSlice";
import { useDispatch, useSelector } from "react-redux";

function PlaystationGames({ row, img, txt, price, id, amount }) {
  const dispatch = useDispatch();
  const counterInfo = useSelector(counterState);
  console.log(counterInfo);

  const handleAdd = () => {
    dispatch(add());
    dispatch(addprice(price));
    dispatch(counter());
    dispatch(
      addItem({
        title: txt,
        id: id,
        img: img,
        price: price,
        amount: counterInfo,
      })
    );
    dispatch(removePlay({ id: id, amount: amount }));
  };

  return (
    <PlaystationGameWrapper column style={{ gridRow: `${row}` }}>
      <SideLeft>
        <Image src={img} />
      </SideLeft>
      <SideRight>
        <TitleSideRight>{txt}</TitleSideRight>
        <PriceBasketWrapper>
          <PriceSideRight>{price}</PriceSideRight>
          <BasketIcon icon={faCartArrowDown} onClick={handleAdd} />
          <BasketAmount>Amount: {amount}</BasketAmount>
        </PriceBasketWrapper>
      </SideRight>
    </PlaystationGameWrapper>
  );
}

export default PlaystationGames;
