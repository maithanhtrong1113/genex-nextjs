import React, { Fragment } from "react";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Breadcrumbs from "../components/Partner/Breadcrumbs";
import Content from "../components/Partner/Content";

const partner = () => {
  return (
    <Fragment>
      <Head>
        <title>Khách Hàng - Đối Tác</title>
      </Head>
      <ScrollTopShare />
      <Navigation />
      <CarouselProduct />
      <Breadcrumbs />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default partner;
