import styled, { css } from "styled-components";

export const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 49px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;

  margin-bottom: 20px;

  display: flex;

  div {
    margin-right: 20px;
  }

  @media (max-width: 1098px) {
    font-size: 25px;
  }
`;

export const SubTitle = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 39px;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;

  margin-bottom: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

export const Card = styled.div`
  width: 95%;

  padding: 45px;

  background: #13131c;
  border-radius: 10px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 70px 0px;

  display: flex;
  justify-content: space-between;

  flex-flow: wrap-reverse;

  align-items: center;

  ${({ type }) =>
    type === "rtl" &&
    css`
      flex-direction: row-reverse;
    `}

  ${({ type }) =>
    type === "center" &&
    css`
      flex-direction: column-reverse;
    `}

  @media (max-width: 1098px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 50%;

  ${({ showButton }) =>
    !showButton &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}

  ${({ type }) =>
    type === "center" &&
    css`
      width: 100%;
    `}

  @media (max-width: 1098px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 390.9px;
  height: 383px;

  flex: none;
  order: 1;
  flex-grow: 0;

  object-fit: contain;

  ${({ type }) =>
    type === "center" &&
    css`
      width: 1216.23px;
      height: 480.31px;
    `}
`;

export const Container = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 50%;

  padding-top: 14%;
`;
