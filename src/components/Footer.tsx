import FacebookIcon from "@/common/icons/FacebookIcon";
import InstagramIcon from "@/common/icons/InstagramIcon";
import TiktokIcon from "@/common/icons/TiktokIcon";
import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
          <p>
            &copy; {new Date().getFullYear()} Echo Wilpattu. All rights
            reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <TiktokIcon />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <InstagramIcon />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
