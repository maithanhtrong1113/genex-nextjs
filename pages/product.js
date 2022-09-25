import React from "react";
import Content from "../components/Product/Content";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import Breadcrumb from "../components/Product/Breadcrumbs";
import ScrollTopShare from "../components/Index/ScrollTopShare";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sản Phẩm</title>
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

export default Home;
