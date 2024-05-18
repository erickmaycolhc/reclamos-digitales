import React from "react";
import Head from "next/head";
import favicon from "../../../public/images/brand/favicon.ico";

export default function Seo(title: string) {
  return (
    <Head>
      <title>Spruha - {title}</title>
      <link rel="icon" href={favicon.src} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
}
