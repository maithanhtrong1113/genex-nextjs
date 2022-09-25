import React, { Fragment } from "react";

import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import Content from "../components/BlockchainLayer1/Content";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Breadcrumb from "../components/BlockchainLayer1/Breadcrumbs";
const blockChainLayer1 = () => {
  return (
    <Fragment>
      <Head>
        <title>Blockchain Layer 1</title>
      </Head>

      <ScrollTopShare />
      <Navigation />
      <CarouselProduct />
      <Breadcrumb />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default blockChainLayer1;
