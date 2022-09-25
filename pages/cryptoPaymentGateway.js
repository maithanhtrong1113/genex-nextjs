import React, { Fragment } from "react";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Breadcrumb from "../components/CryptoPaymentGateway/Breadcrumbs";
import Content from "../components/CryptoPaymentGateway/Content";
const cryptoPaymentGateway = () => {
  return (
    <Fragment>
      <Head>
        <title>Crypto Payment Gateway</title>
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

export default cryptoPaymentGateway;
