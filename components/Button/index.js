import Link from "next/link";
import * as S from "./styles";

export default function Button({
  children,
  label = null,
  onClick = null,
  link,
  props = {},
}) {
  if (label) {
    return (
      <Link href={link}>
        <S.Button>
          <p>{label}</p>
        </S.Button>
      </Link>
    );
  }

  return (
    <S.Button {...props} onClick={onClick && onClick}>
      {children}
    </S.Button>
  );
}
