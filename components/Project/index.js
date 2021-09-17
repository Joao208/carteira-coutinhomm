import Link from "next/link";
import * as S from "./styles";

export default function Project({
  type = "ltr",
  title,
  paragraph,
  link = "",
  img,
}) {
  return (
    <S.Container>
      <S.Card type={type}>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{paragraph}</S.SubTitle>
          <S.ContainerButton>
            <Link href={link}>
              <S.Button>
                <p>Ver projeto</p>
              </S.Button>
            </Link>
          </S.ContainerButton>
        </S.Content>
        <S.Image src={img} />
      </S.Card>
    </S.Container>
  );
}
