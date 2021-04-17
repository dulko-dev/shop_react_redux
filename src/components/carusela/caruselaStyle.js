import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #06080f;
  height: 600px;
  margin-top: 100px;
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  height: 400px;
`;
export const TopBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const LeftArrow = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: translateX(-5px);
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
`;
export const RightArrow = styled(LeftArrow)`
  &:hover {
    transform: translateX(5px);
  }
`;

export const PictureContent = styled.div`
  display: flex;
  overflow: hidden;
`;

export const Picture = styled.div`
  background-color: #fff;
  align-self: stretch;
  flex-basis: 100%;
  margin-top: 10px;
  flex-shrink: 0;
  border-right: 1px solid black;
  transition: transform 0.3s;
  ${({ props }) =>
    props &&
    css`
      transition: none;
    `}
`;

export const PictureImg = styled.img``;
