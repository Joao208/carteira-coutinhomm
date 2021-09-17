import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  text-align: center;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 70px 80px;

  width: 90%;

  @media (max-width: 1098px) {
    font-size: 20px;
  }
`;
