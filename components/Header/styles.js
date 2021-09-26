import styled from "styled-components";

export const Header = styled.div`
  height: 150px;
  width: 100%;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 80px 0 80px;
`;

export const Sessions = styled.div`
  height: 100%;
  width: 30%;

  display: flex;
  align-items: center;

  justify-content: right;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Name = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;

  cursor: pointer;

  color: #ffffff;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;

  cursor: pointer;

  color: #ffffff;

  margin-right: 60px;
`;
