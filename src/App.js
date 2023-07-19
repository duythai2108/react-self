import React, { Fragment, createContext, useContext, useState } from "react";
import { CountProvider, useCount } from "./contexts/countContext";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/authContext";
import { GalleryProvider } from "./contexts/gallery-context";
import PhotoList from "./components/gallery/PhotoList";
import CartList from "./components/gallery/CartList";
// import Modal from "./components/modal/Modal";
// import Portal from "./components/Portal";
// import ModalBase from "./components/modal/ModalBase";

// function CountDisplay() {
//   const [count] = useCount();
//   // console.log("🚀 ~ file: App.js:16 ~ CountDisplay ~ context:", context)
//   return <div>The count is: {count}</div>;
// }
// function Counter() {
//   const [, setCount] = useCount();
//   // const setCount = () => {};
//   const increment = () => setCount((c) => c + 1);
//   return (
//     <button
//       onClick={increment}
//       className="p-4 rounded-lg text-white font-semibold bg-purple-400"
//     >
//       Increment count
//     </button>
//   );
// }
const App = () => {
  return (
    <Fragment>
      {/* <div className="p-5 flex items-center justify-center gap-x-5">
        <CountProvider>
          <CountDisplay></CountDisplay>
          <Counter></Counter>
        </CountProvider>
      </div> */}
      {/* Bai tap context */}
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
