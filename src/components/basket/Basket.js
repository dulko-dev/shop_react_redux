import React from "react";
import { itemsState } from "../../features/amountSlice";
import { useSelector } from "react-redux";

function Basket() {
  const selected = useSelector(itemsState);
  console.log(selected);
  return (
    <div>
      {selected.map((e) => (
        <div key={e.id}>
          <h2>{e.title}</h2>
          <img src={e.img} />
        </div>
      ))}
    </div>
  );
}

export default Basket;
