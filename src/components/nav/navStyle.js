import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #06080f;
  width: 100%;
  height: 70px;
`;
export const Content = styled.div`
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
export const LeftBox = styled.ul`
  display: flex;
  align-items: center;
  color: #fff;
  width: 100%;
`;
export const ListOfMenu = styled.li`
  font-size: 1.4em;
  padding-right: 10px;
  text-transform: uppercase;
  &:nth-last-child(2) {
    color: red;
  }
`;

export const FontAwesomeStyle = styled(FontAwesomeIcon)`
  color: rgba(255, 255, 255, 0.4);
`;

export const LinkStyle = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    outline: none;
  }
`;

export const RightBox = styled.div`
  position: relative;
  background-color: #dafeb7;

  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconBasket = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  padding-right:10px;
`;

export const NumbersOfAmount = styled.span`
  background-color: red;
  color: #fff;
  position: absolute;
  top: 4px;
  left: 35px;
  padding:2px 6px;
  text-align:center;
`;
export const PriceAmount = styled.div`
font-weight:600;
`;
export const FbIcon = styled.div``;
