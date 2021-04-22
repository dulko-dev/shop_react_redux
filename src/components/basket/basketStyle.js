import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border: 1px dotted black;
`;

export const Th = styled.th`
  text-align: start;
  width: 15%;
  &:first-child {
    width: 50%;
  }
`;
