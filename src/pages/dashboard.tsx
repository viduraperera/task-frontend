import TopDescription from "@/components/dashboard/TopDescription";
import Vision from "@/components/dashboard/Vision";
import React, { Suspense } from "react";
import { Container, Spinner } from "react-bootstrap";
import Location from "@/components/dashboard/Location";
import Carousel from "@/components/dashboard/Carousel";
import CareerSection from "@/components/dashboard/CareerSection";

const Pricing = React.lazy(() => import("@/components/dashboard/Pricing"));

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
        <div id="about-us">
          <Vision />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="careers">
          <CareerSection />
        </div>
        <Location />
      </Suspense>
    </Container>
  );
}
