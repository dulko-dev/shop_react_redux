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

