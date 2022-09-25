import React, { Fragment } from "react";
import Navigation from "../components/Index/Navigation";
import Footer from "../components/Index/Footer";
import Head from "next/head";
import CarouselProduct from "../components/Product/CarouselProduct";
import ScrollTopShare from "../components/Index/ScrollTopShare";
import Breadcrumb from "../components/caseStudyBlockchain/Breadcrumbs";
import Content from "../components/CaseStudyBlockchain/Content";

const caseStudyBlockchain = () => {
  return (
    <Fragment>
      <Head>
        <title>Case Study Blockchain</title>
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

export default caseStudyBlockchain;
