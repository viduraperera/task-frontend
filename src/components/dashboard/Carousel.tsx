import { CarouselImageData } from "@/constants/GlobalConstants";
import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselPage"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div
        className="carousel-inner"
        style={{ height: "500px", position: "relative" }}
      >
        {CarouselImageData.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ height: "100%", position: "relative" }}
          >
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              alt={image.alt}
              loading="lazy"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{image.title}</h5>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselPage"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselPage"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
