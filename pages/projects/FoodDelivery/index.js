import Footer from "@components/Footer";
import Paragraph from "@components/Paragraph";
import Project from "@components/Project";
import Title from "@components/Title";

import { useFoodDelivery } from "@components/FoodDelivery/hook";
import * as S from "@components/FoodDelivery/styles";

export default function FoodDelivery() {
  return (
    <>
      <Title title="Aplicativo de delivery de comida" />
      <Paragraph paragraph="Aplicativo feito para a empresa FoodZilla, que é uma empresa que atua no mercado dos deliveries. O intuito desse app é ser fácil de usar e deixar o usuário fazer pedidos com a menor quantidade possível de cliques. O aplicativo contém quatro abas: a tela incial, pesquisa, pedidos e perfil, que servem para atender as necessidades do usuário. Suas funcionalidades se resumem a gerar experiência personalizada ao usuário, principalmente na tela inicial, onde são feitas as sugestões, e dar mais agilidade caso ele queira fazer pesquisas, acompanhar seus pedidos ou entrar em contato com o suporte do FoodZilla" />
      {useFoodDelivery.map(({ title, paragraph, img, type }, index) => (
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
