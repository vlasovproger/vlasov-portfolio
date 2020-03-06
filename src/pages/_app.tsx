import App from "next/app";
import Head from "next/head";
import React from "react";
import { register, unregister } from "next-offline/runtime";
import { PageTransition } from "next-page-transitions";
import "../../index.d.ts";
import { AppProps } from "next/app";

class MyApp extends App {
  componentDidMount() {
    register();
  }
  componentWillUnmount() {
    unregister();
  }
  render() {
    const { Component, pageProps, router }: AppProps = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#1D1D1D" />
          <meta
            name="description"
            content="Andrey Vlasov personal portfolio."
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicons/favicon-32x32.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <title>Vlasov - Portfolio</title>
        </Head>

        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
