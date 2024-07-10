import React from "react";

export default function Location() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26545.411332707154!2d80.16119852838948!3d8.49947605445721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdac7787e4bc27%3A0xcdd9a0715dad187c!2sWilpattu%20National%20Park!5e0!3m2!1sen!2sus!4v1720646915221!5m2!1sen!2sus"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
}
