import React from "react";
import Content from "../components/Index/Content";
import CarouselHome from "../components/Index/CarouselHome";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import LoadingScreen from "../components/Index/LoadingScreen";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Head from "next/head";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>GENEX</title>
      </Head>
      <LoadingScreen>
        <ScrollTopShare />
        <Navigation />
        <CarouselHome />
        <Content />
        <Footer />
      </LoadingScreen>
    </React.Fragment>
  );
};

export default Home;
