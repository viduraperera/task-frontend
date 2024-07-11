import React from "react";

export default function Vision() {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Explore Wilpattu Safari</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            Experience the Untamed Beauty of Wilpattu
          </h2>
          <p className="text-body-secondary">
            Discover the wonders of Wilpattu National Park, where nature thrives
            in its pristine form. Join us for an unforgettable safari adventure
            amidst lush landscapes and diverse wildlife.
          </p>
          <a href="#" className="btn booking-button">
            Book Your Safari
          </a>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Wildlife Encounters
              </h4>
              <p className="text-body-secondary">
                Encounter majestic creatures such as leopards, elephants, and
                sloth bears in their natural habitat.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Scenic Landscapes
              </h4>
              <p className="text-body-secondary">
                Marvel at the picturesque landscapes, from expansive lakes to
                dense forests, that define Wilpattu&apos;s beauty.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Expert Guides
              </h4>
              <p className="text-body-secondary">
                Our experienced guides will enrich your safari experience with
                their extensive knowledge of the park&apos;s flora and fauna.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Conservation Efforts
              </h4>
              <p className="text-body-secondary">
                Learn about our conservation efforts aimed at preserving
                Wilpattu&apos;s ecosystem for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
