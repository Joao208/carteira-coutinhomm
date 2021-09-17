import Button from "@components/Button";
import Number from "@components/Number";
import * as S from "./styles";

export default function Project({
  type = "ltr",
  title,
  paragraph,
  link = "",
  img,
  showButton = true,
  props = {},
  showCount,
  count,
}) {
  return (
    <S.Container>
      <S.Card {...props} type={type}>
        <S.Content showButton={showButton}>
          {showCount ? (
            <S.Title>
              <Number value={count} /> {title}
            </S.Title>
          ) : (
            <S.Title>{title}</S.Title>
          )}
          <S.SubTitle>{paragraph}</S.SubTitle>
          {showButton && (
            <S.ContainerButton>
              <Button label="Ver projeto" link={link} />
            </S.ContainerButton>
          )}
        </S.Content>
        <S.Image src={img} />
      </S.Card>
    </S.Container>
  );
}
