import * as S from "./styles";

export default function Project() {
  return (
    <S.Container>
      <S.Card>
        <S.Content>
          <S.Title>Aplicativo para entregadores</S.Title>
          <S.SubTitle>
            Aplicativo feito para a empresa FoodZilla, que é uma empresa que
            atua no mercado dos deliveries. Nesse aplicativo, os entregadores...
          </S.SubTitle>
          <S.Button>
            <p>Ver projeto</p>
          </S.Button>
        </S.Content>
        <S.Image src="delivery_man1.png" />
      </S.Card>
    </S.Container>
  );
}
