import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <S.Name onClick={() => (window.location.href = "/")}>
        Mateus Coutinho
      </S.Name>
      <S.Sessions>
        <S.Link href="#projects">Projetos</S.Link>
        <S.Link href="#contact">Contato</S.Link>
      </S.Sessions>
    </S.Header>
  );
}
