import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4">
      <p>
        &copy; {new Date().getFullYear()} Echo Wilpattu. All rights reserved.
      </p>
    </footer>
  );
}
