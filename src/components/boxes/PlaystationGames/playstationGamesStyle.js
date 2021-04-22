import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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
export const BasketAmount = styled.div`
  text-transform: lowercase;
  padding-left: 10px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
