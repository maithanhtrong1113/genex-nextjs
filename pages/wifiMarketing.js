import React, { Fragment } from "react";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Breadcrumb from "../components/wifiMarketing/Breadcrumbs";
import Content from "../components/wifiMarketing/Content";
const wifiMarketing = () => {
  return (
    <Fragment>
      <Head>
        <title>Giải pháp</title>
      </Head>
      <ScrollTopShare />
      <Navigation />
      <CarouselProduct />
      <Breadcrumb />
      <Content></Content>
      <Footer />
    </Fragment>
  );
};

export default wifiMarketing;
