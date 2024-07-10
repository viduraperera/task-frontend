/* eslint-disable @next/next/no-img-element */
import BlogHeading from "@/components/blogs/BlogHeading";
import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";

const BlogContent = React.lazy(() => import("@/components/blogs/BlogContent"));

export default function Blog() {
  return (
    <div>
      <BlogHeading />
      <Suspense
        fallback={
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <BlogContent />
      </Suspense>
    </div>
  );
}
