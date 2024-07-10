import Image from "next/image";
import React from "react";

export default function BlogDetails({ blog }: { blog: any }) {
  return (
    <div className="card shadow-sm">
      <Image
        src={blog.picture}
        className="card-img-top"
        alt="Blog Thumbnail"
        width={400}
        height={250}
        loading="lazy"
      />
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.subtitle}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
          </div>
          <small className="text-body-secondary">{blog.readingTime}</small>
        </div>
      </div>
    </div>
  );
}
