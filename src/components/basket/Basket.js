import React from "react";
import { addItemState, removeItem } from "../../features/addItemSlice";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Container, Table, Th } from "./basketStyle";

function Basket() {
  const selected = useSelector(addItemState);
  console.log(selected);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Container>
        {selected && selected.length === 0 ? (
          <p>Sorry memory</p>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>Product Name</Th>
                <Th>Amount</Th>
                <Th>Price</Th>
                <Th>Value</Th>
              </tr>
            </thead>
            {selected.map((e) => (
              <tbody key={e.id}>
                <tr>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingBottom: "20px",
                    }}
                  >
                    <button>X</button>
                    <img src={e.img} />
                    <h2>{e.title}</h2>
                  </td>
                  <td>
                    <p>{e.amount}</p>
                  </td>
                  <td>
                    <p>{e.price}</p>
                  </td>
                  <td>{e.price}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </Container>
    </Wrapper>
  );
}

export default Basket;
