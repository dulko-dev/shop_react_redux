import React from "react";
import { addItemState } from "../../features/addItemSlice";
import { useSelector } from "react-redux";

function Basket() {
  const selected = useSelector(addItemState);
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
