import React from "react";
import HomeContent from "../components/home-content";
import Layout from "../components/layout";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Layout>
        <HomeContent />
      </Layout>
    </>
  );
};

export default HomePage;
