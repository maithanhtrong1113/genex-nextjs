import Head from "next/head";
import React, { Fragment } from "react";
import Content from "../../components/Wifimarketingplatform/Content";
import Header from "../../components/Wifimarketingplatform/Header";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Wifi Marketing Platform</title>
      </Head>
      <Header />
      <Content />
    </Fragment>
  );
};

export default index;
