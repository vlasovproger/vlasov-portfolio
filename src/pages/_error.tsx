import React from "react";
import Layout from "../components/layout";
import ErrorContent from "../components/error-content";
import { NextPage } from "next";

const ErrorPage: NextPage = () => {
  return (
    <Layout>
      <ErrorContent />
    </Layout>
  );
};

export default ErrorPage;
