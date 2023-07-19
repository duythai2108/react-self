import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div>
      <div className="youtube-list">
        {props.children}
        {YoutubeData.map((item, index) => {
          return (
            <YoutubeItem
              key={item.id}
              image={item.image}
              avatar={item.avatar || item.image}
              title={item.title}
              author={item.author}
              className={index === 1 ? "abc" : ""}
            ></YoutubeItem>
          );
        })}
        {/* Children component */}
        {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      </div>
    </div>
  );
};

export default YoutubeList;
