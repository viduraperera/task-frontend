import Carousel from "@/components/Carousel";
import Location from "@/components/Location";
import TopDescription from "@/components/TopDescription";
import VillaDetails from "@/components/VillaCards";
import Vision from "@/components/Vision";
import React, { Suspense } from "react";
import { Container, Spinner } from "react-bootstrap";

const Pricing = React.lazy(() => import("@/components/Pricing"));

export default function Dashboard() {
  return (
    <Container as="main" className="py-4 px-3 mx-auto">
      <h1>Welcome to Echo Wilpatthu</h1>
      <TopDescription />
      <hr className="col-1 my-5 mx-0" />
      <Carousel />
      <Suspense
        fallback={
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Vision />
        <Pricing />
        <Location />
      </Suspense>
    </Container>
  );
}
