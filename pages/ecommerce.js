import React, { Fragment } from "react";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Breadcrumb from "../components/Ecommerce/Breadcrumbs";
import Content from "../components/Ecommerce/Content";
const ecommerce = () => {
  return (
    <Fragment>
      <Head>
        <title>Ecommerce</title>
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

export default ecommerce;
