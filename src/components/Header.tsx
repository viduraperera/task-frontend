import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderItems from "../common/HeaderItems";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Image
          src="/assets/images/logo.webp"
          alt="Animal"
          loading="lazy"
          width={40}
          height={40}
          className="logo"
        />
        <Link className="navbar-brand" href="/">
          Echo Wilpattu
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <HeaderItems href="/">Home</HeaderItems>
            <HeaderItems href="/blogs">Blogs</HeaderItems>
            <HeaderItems href="/contact-us">Contact Us</HeaderItems>
            <HeaderItems href="/#careers">Careers</HeaderItems>
            <HeaderItems href="/#pricing">Packages</HeaderItems>
            <HeaderItems href="/#about-us">About Us</HeaderItems>
          </ul>
        </div>
      </div>
    </nav>
  );
}
