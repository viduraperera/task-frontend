import FooterItems from "@/common/FooterItems";
import React from "react";

export default function FooterBase() {
  return (
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <FooterItems href="/">Home</FooterItems>
      <FooterItems href="/blogs">Blogs</FooterItems>
      <FooterItems href="/contact-us">Contact Us</FooterItems>
      <FooterItems href="/#careers">Careers</FooterItems>
      <FooterItems href="/#pricing">Packages</FooterItems>
      <FooterItems href="/#about-us">About Us</FooterItems>
    </ul>
  );
}
