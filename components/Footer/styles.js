import styled from "styled-components";

export const Icon = styled.img`
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 50px;

  height: 43.11113739013672px;
  width: 45.38014602661133px;
  border-radius: 0px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  height: 60px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 60px;

  text-align: center;

  color: #6889ff;

  margin-bottom: 50px;

  cursor: pointer;

  @media (max-width: 1098px) {
    font-size: 20px;
  }
`;
