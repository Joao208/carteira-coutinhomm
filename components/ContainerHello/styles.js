import styled, { css } from "styled-components";

export const ContainerHello = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;

  justify-content: center;

  flex-wrap: wrap;

  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1098px) {
    padding-left: 100px;
    padding-right: 100px;
  }
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

  @media (max-width: 1098px) {
    text-align: center;
    font-size: 50px;
  }
`;

export const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;

  @media (max-width: 1098px) {
    text-align: center;
  }
`;

export const ContainerTexts = styled.div`
  width: 50%;

  @media (max-width: 1098px) {
    width: 100%;
  }
`;

export const Avatar = styled.img`
  width: 350px;
  height: 350px;

  border-radius: 200px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 80px;

  @media (max-width: 1098px) {
    margin: 20px 0;
    width: 300px;
    height: 300px;
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
  margin-top: 20px;

  cursor: pointer;
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

  @media (max-width: 1098px) {
    align-items: center;
    justify-content: center;
  }
`;
