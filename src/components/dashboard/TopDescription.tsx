import React from "react";
import { Col } from "react-bootstrap";

export default function TopDescription() {
  return (
    <>
      <Col lg={8} className="px-0">
        {/* <p className="fs-4">
          You&apos;ve successfully loaded the Bootstrap + React example!
          It&apos;s loaded up with{" "}
          <a href="https://getbootstrap.com/">Bootstrap 5</a> and uses React and
          Next.js to compile and bundle our Sass. It also features a handful of
          custom React components built using{" "}
          <a href="https://react-bootstrap.github.io/">React Bootstrap</a>.
        </p> */}
        <p className="fs-4">
          Discover the wild beauty of Wilpattu National Park with Echo Wilpattu.
          Our carefully curated safari packages offer an unforgettable
          experience in one of Sri Lanka&apos;s largest and most diverse wildlife
          sanctuaries. Stay in our comfortable Saml Villa, embark on thrilling
          safari adventures, and enjoy a variety of additional activities that
          bring you closer to nature. Choose from our Standard, Deluxe, or
          Luxury packages and start your adventure today!
        </p>
      </Col>
    </>
  );
}
