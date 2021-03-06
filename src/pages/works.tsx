import React from "react";
import Layout from "../components/layout";
import WorksContent from "../components/works-content";
import { observer } from "mobx-react";
import useStores from "../hooks/use-stores";
import Spinner from "../components/spinner";
import { NextPage } from "next";

const Works: NextPage = observer(() => {
  const {
    worksStore: { loadingWorks }
  } = useStores();
  if (loadingWorks) {
    return <Spinner />;
  }
  return (
    <Layout>
      <WorksContent />
    </Layout>
  );
});

export default Works;
