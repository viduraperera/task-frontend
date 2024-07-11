import CustomPrimaryButton from "@/common/buttons/CustomPrimaryButton";
import {
  CareerSectionConstants,
  StaffImage,
} from "@/constants/GlobalConstants";
import Image from "next/image";
import React from "react";

export default function CareerSection() {
  const { title, description } = CareerSectionConstants;

  return (
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <Image
          src={StaffImage}
          className="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width={700}
          height={500}
          loading="lazy"
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          {title}
        </h1>
        <p className="lead">{description}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <CustomPrimaryButton
            href="/#careers"
            className="btn booking-button btn-lg px-4 me-md-2"
          >
            View Open Positions
          </CustomPrimaryButton>
          <CustomPrimaryButton
            href="/contact-us"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Contact Us
          </CustomPrimaryButton>
        </div>
      </div>
    </div>
  );
}
