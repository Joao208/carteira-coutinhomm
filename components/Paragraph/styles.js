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

  width: 90%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  @media (max-width: 1098px) {
    font-size: 20px;

    width: 100%;
  }

  @media (min-width: 1098px) {
    margin: 70px 80px;
  }
`;
