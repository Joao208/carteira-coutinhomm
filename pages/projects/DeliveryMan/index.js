import Footer from "@components/Footer";
import Paragraph from "@components/Paragraph";
import Project from "@components/Project";
import Title from "@components/Title";

import { useDeliveryMan } from "@components/DeliveryMan/hook";
import * as S from "@components/DeliveryMan/styles";

export default function DeliveryMan() {
  return (
    <>
      <Title title="Aplicativo para entregadores" />
      <Paragraph paragraph="Aplicativo feito para a empresa FoodZilla, que é uma empresa que atua no mercado dos deliveries. Nesse aplicativo, os entregadores só precisam logar e já podem começar a usar. Nele, o entregador pode ver as rotas mais rápidas dos pedidos a serem entregues e o que entregar" />
      {useDeliveryMan.map(({ title, paragraph, img, type }, index) => (
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
        <p style={{ marginRight: "20px" }}>Próximo projeto</p>
        <S.Icon src="/arrow_left.png" />
      </Footer>
    </>
  );
}
