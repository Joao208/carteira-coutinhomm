import Link from "next/link";
import Button from "@components/Button";
import * as S from "./styles";
import defaultChildren from "./Defaults/children";

export default function Footer({
  title = "",
  link = "",
  children = defaultChildren(),
}) {
  return (
    <>
      <S.Container>
        <Button props={{ style: { width: "50%" } }}>{children}</Button>
      </S.Container>
      <Link href={link}>
        <S.Text>{title}</S.Text>
      </Link>
    </>
  );
}
