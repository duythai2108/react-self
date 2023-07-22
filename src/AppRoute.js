import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
import BlogPageDetails from "./components/BlogPageDetails";

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route
          path="/"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quibusdam saepe ipsa maxime recusandae enim alias quasi
              repellendus, iure consectetur, nostrum omnis molestiae corrupti
              dolorem aliquid laborum optio illum quo?
            </div>
          }
        ></Route>
        <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route
          path="/movie/:movieId"
          element={<div>This is movies details of movieId</div>}
        ></Route>
        <Route path="/movie" element={<div>this is a movie</div>}></Route>
      </Routes> */}
      {/* Chap 2 */}
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 page</>}></Route>
      </Routes>
    </div>
  );
};

export default App;
