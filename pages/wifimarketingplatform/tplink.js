import React, { Fragment } from "react";
import Head from "next/head";
import Header from "../../components/Wifimarketingplatform/Header";
import Content from "../../components/Wifimarketingplatform/Tplink/Content";

const tplink = () => {
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

export default tplink;
