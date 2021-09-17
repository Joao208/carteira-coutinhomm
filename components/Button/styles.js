import styled from "styled-components";

export const Button = styled.div`
  width: 100%;
  height: 100px;

  background: #6889ff;
  border-radius: 5px;

  flex: none;
  order: 2;
  flex-grow: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  p {
    height: 47px;

    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;

    text-align: center;

    color: #ffffff;

    @media (max-width: 1098px) {
      font-size: 30px;
    }
  }
`;
