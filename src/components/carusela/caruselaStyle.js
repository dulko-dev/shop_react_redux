import styled from "styled-components";
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
  right: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  height: 400px;
  border: 1px solid red;
`;
export const TopBottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0 10px;
`;
export const LeftArrow = styled(FontAwesomeIcon)``;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
`;
export const RightArrow = styled(FontAwesomeIcon)``;

export const PictureContent = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow:hidden;
`;

export const Picture = styled.div`
  background-color: #fff;
  height: 348px;
  flex-basis: 100%;
  margin-top: 10px;
  flex-shrink: 0;
  border-right: 1px solid black;
`;

export const PictureImg = styled.img``;
