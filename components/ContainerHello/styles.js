import styled, { css } from "styled-components";

export const ContainerHello = styled.div`
  width: 100vw;
  height: 430px;

  display: flex;
  align-items: center;

  padding-left: 100px;
  padding-right: 100px;

  justify-content: center;

  flex-wrap: wrap;
`;

export const Hello = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  line-height: 120px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Paragraph = styled.p`
  height: 90px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ContainerTexts = styled.div`
  height: 50%;
  width: 50%;

  @media (max-width: 1098px) {
    background: red;
    width: 100%;
  }
`;

export const Avatar = styled.img`
  width: 250px;
  height: 250px;

  border-radius: 200px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 80px;

  @media (max-width: 1098px) {
    margin: 80px 0;
  }
`;

export const Button = styled.a`
  width: 150px;
  display: flex;
  color: #6889ff;

  align-items: center;

  font-style: normal;
  font-weight: 500;
  font-size: 25px;

  margin-right: 20px;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;

  ${({ isEmail }) =>
    isEmail &&
    css`
      width: 29.75px;
      height: 23px;
    `}

  border-radius: 4px;

  flex: none;
  order: 0;
  flex-grow: 0;

  margin-right: 10px;

  font-family: "Poppins", sans-serif;
`;

export const ContainerButtons = styled.div`
  display: flex;
`;
