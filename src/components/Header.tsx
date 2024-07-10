import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    // <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
    //   <h1 className="h4">
    //     <Link
    //       href="/"
    //       className="d-flex align-items-center text-dark text-decoration-none"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="32"
    //         height="32"
    //         fill="currentColor"
    //         className="bi bi-bootstrap-fill d-inline-block me-2"
    //         viewBox="0 0 16 16"
    //       >
    //         <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
    //         <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
    //       </svg>
    //       <span>React</span>
    //     </Link>
    //   </h1>
    //   <a
    //     href="https://github.com/twbs/examples/tree/main/react-nextjs/"
    //     target="_blank"
    //     rel="noopener"
    //   >
    //     View on GitHub
    //   </a>
    // </header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
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
