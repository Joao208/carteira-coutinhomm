import styled from "styled-components";

export const Button = styled.div`
  width: 500px;
  height: 100px;

  background: #6889ff;
  border-radius: 5px;

  flex: none;
  order: 2;
  flex-grow: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    height: 47px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;

    text-align: center;

    color: #ffffff;
  }
`;

export const Title = styled.p`
  width: 489px;
  height: 50px;

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
`;

export const SubTitle = styled.p`
  width: 500px;
  height: 156px;

  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 39px;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Card = styled.div`
  width: 1214px;
  height: 450px;

  padding: 45px;

  background: #13131c;
  border-radius: 10px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 70px 0px;

  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div``;

export const Image = styled.img`
  width: 390.9px;
  height: 383px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Container = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;
