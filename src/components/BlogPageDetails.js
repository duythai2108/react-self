import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogPageDetails = () => {
  // fetching.co,/slug=hello-word
  const { slug } = useParams();
  console.log(
    "🚀 ~ file: BlogPageDetails.js:6 ~ BlogPageDetails ~ slug:",
    slug
  );
  const navigate = useNavigate();
  return (
    <div>
      Blog page details
      <button
        onClick={() => navigate("/blog")}
        className="p-3 rounded-sm text-white bg-blue-500"
      >
        Navigate to BLog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
