import SubHeadings from "@/common/SubHeadings";
import { PricingData } from "@/constants/GlobalConstants";
import Image from "next/image";
import React from "react";

export default function PricingDetails() {
  return (
    <div>
      <SubHeadings text="Safari Experience" />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {PricingData.map((packageItem, index) => (
          <div className="col" key={index}>
            <div className="card h-100 rounded-3 shadow-sm">
              <Image
                src={packageItem.picture}
                alt="Package Image"
                className="card-img-top"
                width={500}
                height={300}
                loading="lazy"
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-normal">
                  {packageItem.packageName}
                </h4>
                <h1 className="card-title pricing-card-title">
                  {packageItem.price ? `$${packageItem.price}` : "Contact us"}
                  <small className="text-body-secondary fw-light">
                    {packageItem.price ? "/package" : ""}
                  </small>
                </h1>
                <ul className="list-unstyled mb-4">
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
