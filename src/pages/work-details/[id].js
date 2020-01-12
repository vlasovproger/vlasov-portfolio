import React from "react";
import Layout from "../../components/layout";
import WorkDetailsContent from "../../components/work-details-content";
import { useRouter } from "next/router";

const WorkDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <WorkDetailsContent id={id} />
    </Layout>
  );
};

export default WorkDetails;
