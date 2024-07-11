// Import necessary dependencies and villaDetails object
import SubHeadings from "@/common/SubHeadings";
import { villaDetails } from "@/constants/GlobalConstants";
import Image from "next/image";
import React from "react";

export default function VillaDetails() {
  // Convert villaDetails object into an array for mapping
  const villas = Object.values(villaDetails);

  return (
    <div className="container py-5">
      <SubHeadings text="Our Accommodations" />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {villas.map((villa, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <Image
                src={villa.image}
                className="card-img-top"
                alt="Animal"
                loading="lazy"
                width={500}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">{villa.name}</h5>
                <p className="card-text">{villa.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                {villa.amenities.map((amenity, amenityIndex) => (
                  <li key={amenityIndex} className="list-group-item">
                    {amenity}
                  </li>
                ))}
              </ul>
              <div className="card-body">
                <p className="card-text">
                  <strong>Price per night:</strong> ${villa.pricePerNight}
                </p>
                <p className="card-text">
                  <strong>Capacity:</strong> {villa.capacity} guests
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
