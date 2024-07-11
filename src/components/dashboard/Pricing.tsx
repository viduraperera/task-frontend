import { PricingData } from "@/constants/GlobalConstants";
import Image from "next/image";
import React from "react";
import VillaDetails from "../pricings/VillaDetails";
import SubHeadings from "@/common/SubHeadings";
import PricingDetails from "../pricings/PricingDetails";

const Pricing = () => {
  return (
    <div className="container py-5">
      <div className="pricing-header text-center mb-5">
        <h1 className="display-4 fw-normal text-body-emphasis">Our Packages</h1>
        <p className="fs-5 text-body-secondary">
          Explore our exciting safari packages designed to give you the best
          experience at Wilpattu National Park.
        </p>
      </div>

      <VillaDetails />
      <PricingDetails />
    </div>
  );
};

export default Pricing;
