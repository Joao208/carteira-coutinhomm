import * as S from "./styles";

export default function Number({ value = 0 }) {
  return (
    <S.Round>
      <S.Number>{value}</S.Number>
    </S.Round>
  );
}
