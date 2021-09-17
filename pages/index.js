import Head from "next/head";

import Project from "@components/Project";
import Title from "@components/Title";
import ContainerHello from "components/ContainerHello";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <ContainerHello /> <Title title="Projetos" /> <Project />
    </>
  );
}
