import Footer from "@components/Footer";
import Paragraph from "@components/Paragraph";
import Project from "@components/Project";
import Title from "@components/Title";

import { useDashboard } from "@components/Dashboard/hook";
import * as S from "@components/Dashboard/styles";

export default function Dashboard() {
  return (
    <>
      <Title title="Dashboard para estabelecimentos alimentícios" />
      <Paragraph paragraph="Aplicativo web feito para a empresa FoodZilla, que é uma empresa que atua no mercado dos deliveries. Nessa aplicação, os estabelecimentos podem aceitar e negar pedidos, postar stories, gerenciar produtos e fazer tudo o que for necessário. o aplicativo é dividida em sete abas para atender todas as necessidades do estabeecimentos, e saõ eles: “pedidos”, “mensagens”, “mapa”, “impulsionar”, “produtos”, “financeiro” e “configurações”. O app faz parte do conjundo de aplicativos que compoem a plataforma FoodZilla, que inclui: aplicativo mobile para fazer pedidos, aplicativo mobile para dar suporte para entregadores e essa plataforma, que é usada por estabelecimentos" />
      {useDashboard.map(({ title, paragraph, img, type }, index) => (
        <Project
          type={type}
          title={title}
          paragraph={paragraph}
          img={`/${img}`}
          showButton={false}
          props={{ style: { background: "transparent" } }}
          showCount
          count={index + 1}
        />
      ))}
      <Footer title="Página inicial" link="/">
        <p style={{ marginRight: "20px" }}>Entre em contato comigo</p>
        <S.Icon src="/arrow_left.png" />
      </Footer>
    </>
  );
}
