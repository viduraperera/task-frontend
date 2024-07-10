import { PricingData } from "@/constants/GlobalConstants";
import Image from "next/image";
import React from "react";

export default function Pricing() {
  return (
    <div>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">Our Packages</h1>
        <p className="fs-5 text-body-secondary">
          Explore our exciting safari packages designed to give you the best
          experience at Wilpattu National Park.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {PricingData.map((packageItem, index) => (
          <div className="col" key={index}>
            <div className="card mb-4 rounded-3 shadow-sm">
              <Image
                src="/assets/images/animal.webp"
                className="card-img-top"
                alt="Animal"
                loading="lazy"
                width={500}
                height={300}
              />
              <div className="py-3">
                <h4 className="my-0 fw-normal">{packageItem.packageName}</h4>
              </div>
              <div className="card-body  d-flex flex-column">
                <h1 className="card-title pricing-card-title">
                  {packageItem.price ? `$${packageItem.price}` : "Contact us"}
                  <small className="text-body-secondary fw-light">
                    {packageItem.price ? "/package" : ""}
                  </small>
                </h1>
                <ul className={`mt-3 mb-4 packageDetails`}>
                  <li>{packageItem.accommodation}</li>
                  <li>{packageItem.safariExperience}</li>
                  <li>{packageItem.meals}</li>
                  <li>{packageItem.additionalActivities}</li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="w-100 btn btn-lg booking-button"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
