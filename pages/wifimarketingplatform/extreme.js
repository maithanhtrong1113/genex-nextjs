import React, { Fragment } from "react";
import Head from "next/head";
import Header from "../../components/Wifimarketingplatform/Header";
import Content from "../../components/Wifimarketingplatform/Extreme/Content";

const extreme = () => {
  return (
    <Fragment>
      <Head>
        <title>Wifi Marketing Platform</title>
      </Head>
      <Content />
      <Header />
    </Fragment>
  );
};

export default extreme;
