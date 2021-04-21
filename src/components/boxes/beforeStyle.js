import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 1fr 1fr 1fr;
  max-width: 1400px;
  margin: 0 auto;
  text-transform: uppercase;
`;
export const PlaystationBox = styled.div`
  background-color: #a3d9ff;
  grid-column: 1/2;
  grid-row: 1/2;
`;
export const XboxBox = styled.div`
  background-color: #96e6b3;
  grid-column: 2/3;
  grid-row: 1/2;
`;
export const WindowsBox = styled.div`
  background-color: #b48291;
  grid-column: 3/4;
  grid-row: 1/2;
`;
export const TitleLogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2em;
  padding-top: 25px;
`;
export const Title = styled.h2`
  padding-left: 50px;
  font-weight: 600;
`;
export const Logo = styled(FontAwesomeIcon)`
  margin-right: 50px;
`;
export const Text = styled.p`
  font-size: 1.4em;
  padding-left: 50px;
  padding-top: 20px;
`;

export const PlaystationGameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dotted black;
  border-right: 1px dotted black;
  &:first-child {
    background-color: blue;
  }
  grid-column: ${(props) => {
    if (props.column) {
      return `
    1/2
    `;
    }
  }};
`;
export const XboxGameWrapper = styled(PlaystationGameWrapper)`
  grid-column: ${(props) => {
    if (props.column) {
      return `
    2/3
    `;
    }
  }};
`;

export const WIndowsGameWrapper = styled(PlaystationGameWrapper)`
  grid-column: ${(props) => {
    if (props.column) {
      return `
    3/4
    `;
    }
  }};
`;
export const SideLeft = styled.div`
  padding-left: 30px;
`;
export const Image = styled.img`
  max-width: 120px;
  height: 175px;
  object-fit: cover;
`;
export const SideRight = styled.div``;
export const TitleSideRight = styled.h3`
  width: 290px;
  padding-bottom: 30px;
  padding-top: 10px;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
`;
export const PriceBasketWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2em;
`;
export const PriceSideRight = styled.span`
  padding-right: 15px;
  font-size: 1.1em;
`;
export const BasketIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
