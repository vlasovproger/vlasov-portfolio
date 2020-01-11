import React from "react";
import HomeContent from "../components/home-content";
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <>
      <Layout imgUrl="/images/homepage-background.jpeg">
        <HomeContent />
      </Layout>
    </>
  );
};

export default HomePage;
