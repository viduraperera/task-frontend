import React from "react";
import FooterBase from "./footer/FooterBase";
import SocialIcons from "./footer/SocialIcons";

export default function Footer() {
  return (
    <footer className="py-5" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container">
        <div className="row">
          <FooterBase />
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
          <p>
            &copy; {new Date().getFullYear()} Echo Wilpattu. All rights
            reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
