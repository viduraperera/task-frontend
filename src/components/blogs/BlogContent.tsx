import { BlogData } from "@/constants/GlobalConstants";
import React from "react";

const BlogDetails = React.lazy(() => import("./BlogDetails"));

export default function BlogContent() {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {BlogData.map((blog: any) => (
            <div key={blog.id} className="col">
              <BlogDetails blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
