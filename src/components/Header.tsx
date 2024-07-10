import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Image
          src="/assets/images/logo.webp"
          alt="Animal"
          loading="lazy"
          width={40} // Adjust the width as needed
          height={40} // Adjust the height as needed
          style={{ objectFit: "contain", height: "auto" }}
        />
        <a className="navbar-brand" href="/">
          Echo Wilpattu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href={"/" || "/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/blogs" || "/"}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/bookings" || "/"}>
                Bookings
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
