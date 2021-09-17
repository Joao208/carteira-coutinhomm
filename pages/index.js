import Project from "@components/Project";
import Title from "@components/Title";
import ContainerHello from "components/ContainerHello";

export default function Home() {
  return (
    <>
      <ContainerHello /> <Title title="Projetos" /> <Project />
    </>
  );
}
