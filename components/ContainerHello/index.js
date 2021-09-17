import * as S from "./styles";

export default function ContainerHello() {
  return (
    <S.ContainerHello>
      <S.Avatar src="avatar.png" />
      <S.ContainerTexts>
        <S.Hello>Olá,</S.Hello>
        <S.Paragraph>
          Eu sou Mateus, Designer de Experiência do Usuário
        </S.Paragraph>
        <S.ContainerButtons>
          <S.Button href="http://linkedin.com/in/coutinhomm">
            <S.Icon src="linkedin.png" />
            LinkedIn
          </S.Button>
          <S.Button href="mailto:coutinhommwh@gmail.com">
            <S.Icon isEmail src="email.png" />
            E-mail
          </S.Button>
        </S.ContainerButtons>
      </S.ContainerTexts>
    </S.ContainerHello>
  );
}
