import React from "react";

import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";

import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import Breadcrumb from "../components/WifiDspPlatform/Breadcrumbs";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Content from "../components/WifiDspPlatform/Content";
const wifiPlaform = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Wifi DSP Platform</title>
      </Head>
      <ScrollTopShare />
      <Navigation />
      <CarouselProduct />
      <Breadcrumb />
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default wifiPlaform;
