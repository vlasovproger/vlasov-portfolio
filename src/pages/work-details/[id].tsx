import React, { useEffect } from "react";
import Layout from "../../components/layout";
import WorkDetailsContent from "../../components/work-details-content";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import Spinner from "../../components/spinner";
import { NextPage } from "next";

const WorkDetails: NextPage = observer(() => {
  const router = useRouter();
  const { id } = router.query;
  const {
    worksStore: { loadingWork, currentWork, getCurrentWork }
  } = useStores();
  const { portfolioService } = useServiceContext();

  useEffect(() => {
    if (id) {
      getCurrentWork(+id, portfolioService);
    }
  }, [id]);

  if (loadingWork || !currentWork.id) {
    return <Spinner />;
  }
  return (
    <Layout>
      <WorkDetailsContent currentWork={currentWork} />
    </Layout>
  );
});

export default WorkDetails;
