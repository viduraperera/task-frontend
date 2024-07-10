import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import TopDescription from "@/components/TopDescription";
import Head from "next/head";
import Script from "next/script";
import Container from "react-bootstrap/Container";
// import AppGuides from "@/components/AppGuides";
// import Footer from "@/components/Footer";

// import ExampleComponents from "@/components/ExampleComponents";

export default function Home() {
  return (
    <>
      <Head>
        <title>Echo Wilpatthu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Container as="main" className="py-4 px-3 mx-auto">
        <h1>Welcome to Echo Wilpatthu</h1>
        <TopDescription />
        <hr className="col-1 my-5 mx-0" />
        <Carousel />
        <Pricing />
      </Container>
    </>
  );
}
