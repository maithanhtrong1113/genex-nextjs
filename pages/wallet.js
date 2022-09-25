import React, { Fragment } from "react";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Breadcrumb from "../components/wallet/Breadcrumbs";
import Content from "../components/Wallet/Content";

const wallet = () => {
  return (
    <Fragment>
      <Head>
        <title> Blockchain Wallet</title>
      </Head>
      <ScrollTopShare />
      <Navigation />
      <CarouselProduct />
      <Breadcrumb></Breadcrumb>
      <Content />
      <Footer />
    </Fragment>
  );
};

export default wallet;
