// import Button from "./components/button/Button";
// import { GlobalStyles } from "./GlobalStyles";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import CardTailwind from "./components/card/CardTailwind";
import React, { useEffect, useRef, useState } from "react";
// import Form from "./components/form/Form.js";
// import MovieSearchApp from "./components/MovieSearchApp.js";
// import SignupForm from "./components/form/SignupForm.js";
// import SignupFormV2 from "./components/form/SignupFormV2.js";
// import SignupFormFinal from "./components/form/SignupFormFinal.js";
// import SignupFormHook from "./components/form/SignupFormHook.js";
import { Fragment } from "react";
// import Modal from "./components/modal/Modal.js";
// import Dropdown from "./components/Dropdown.js";
import DropdownPortal from "./components/DropdownPortal.js";
import Tooltip from "./components/tooltip/Tooltip.js";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
// import StopWatch from "./components/StopWatch";

// import TextAreaAutoResize from "./components/TextAreaAutoResize";
// import Dropdown from "./components/Dropdown";
// import Blog from "./components/Blog";
// import Header from "./components/Header";
// import Timer from "./components/Timer";
// import Counter from "./components/counter/Counter";
// import Photos from "./components/photo/Photos";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
//   orange: "#ffa400",
// };
// import Game from "./components/tictactoe/Game";

// JSX: Javascript XML
// ES6
// Babel
/* 
  * element = <div id= "root">Hello word </div>: JSX
  *

*/
// function Feature() {
//   return (
//     <div className="feature">
//       <img src="" alt="" srcset="" className="feature-image" />
//       <h3 className="feature-title">Title</h3>
//       <p className="feature-desc">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
//         autem atque accusantium consequatur dicta in repudiandae, quasi
//         laudantium animi nesciunt asperiores nostrum possimus dolores cupiditate
//         natus quidem velit facilis consequuntur.
//       </p>
//     </div>
//   );
// }
// parent component

function App() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {/* <div className="relative z-0">
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="m-5 p-4 bg-green-500 text-white rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quod
        repellat esse libero at sint cum, hic numquam rerum odio. Unde eveniet
        illo explicabo debitis cumque ipsam soluta velit assumenda!
      </div> */}
      {/* su ly portal voi overflow hidden */}
      {/* <div className="overflow-hidden p-5">
        <DropdownPortal></DropdownPortal>
      </div> */}
      {/* Tooltip with portal */}
      {/* <div className="p-16 mt-16 overflow-hidden">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div> */}
    </Fragment>
  );
}
// Props -> Propertise

//* Rendering list
// getBoundingCLientRect
export default App;
