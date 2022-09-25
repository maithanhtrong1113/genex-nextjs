import React, { Fragment } from "react";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import ScrollTopShare from "../components/Index/ScrollTopShare";

const updating = () => {
  return (
    <Fragment>
      <Head>
        <title>Updating</title>
      </Head>
      <ScrollTopShare />
      <Navigation />
      <CarouselProduct />
      <h3>Updating</h3>
      <Footer />
    </Fragment>
  );
};

export default updating;
