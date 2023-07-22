import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const BlogPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(
    "🚀 ~ file: BlogPage.js:5 ~ BlogPage ~ searchParam:",
    searchParam.get("search")
  );
  useEffect(() => {
    setSearchParam({ search: "Evondev" });
  }, []);
  return <div>Blog page</div>;
};

export default BlogPage;
