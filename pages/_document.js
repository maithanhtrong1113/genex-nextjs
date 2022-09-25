import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="/images/favicon.ico"
          ></link>
          <meta name="description" content="WiFi DSP Platform" />
          <meta name="author" content="GENEX Development" />
          <link rel="icon" href="/images/logo/genex-fav.ico" />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
