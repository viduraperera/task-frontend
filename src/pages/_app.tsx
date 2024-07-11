// _app.tsx
import React from "react";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "react-bootstrap/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container as="main" className="py-4 px-3 mx-auto">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}
