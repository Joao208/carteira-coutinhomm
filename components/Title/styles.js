import styled from "styled-components";

export const Title = styled.p`
  text-align: center;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 60px;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;

  margin-top: 80px;

  @media (max-width: 1098px) {
    font-size: 50px;
  }

  @media (min-width: 1098px) {
    line-height: 120px;
  }
`;
