import Head from "next/head";

import Project from "@components/Project";
import Title from "@components/Title";
import ContainerHello from "components/ContainerHello";
import { projects } from "projects/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mateus Coutinho - Portifólio</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <ContainerHello /> <Title title="Projetos" />
      {projects.map(({ type, title, paragraph, link, img }) => (
        <Project
          type={type}
          title={title}
          paragraph={paragraph}
          link={link}
          img={img}
        />
      ))}
    </>
  );
}
