import React, { Fragment } from "react";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Breadcrumb from "../components/About/Breadcrumbs";
import Content from "../components/About/Content";
import Map from "../components/About/Map";

const about = () => {
  return (
    <Fragment>
      <Head>
        <title>About GENEX</title>
      </Head>
      <ScrollTopShare />
      <Navigation />
      <CarouselProduct />
      <Breadcrumb />
      <Content />
      <Map />
      <Footer />
    </Fragment>
  );
};

export default about;
