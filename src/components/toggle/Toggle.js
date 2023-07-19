import React, { useState } from "react";
import "./ToggleStyle.css";
// stateless functional component: component nhung khong su dung state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// stateful functional compononent: component co su dung state
// function Toggle2() {
//   // const [count, setCount] = useState();
//   return <div className="toggle"></div>
// }
// const Toggle = () => {
//   return <div></div>;
// };
function Toggle() {
  // 1. enabling state: useState(innitialize value)
  // 2. initialize state: useState(false)
  // 3. reading state:
  // 4. update state
  // const array = useState(false);
  // initialize value: boolean(true, false), number(1,2,3,4), string("evondev"), undefined, null, [1,2,3,4], {title: "Frontend Developer"}
  const [on, setOn] = useState(false);
  console.log(on);
  // console.log(on,setOn);
  // setOn(true);
  // const [title, setTitle]
  // <div className="toggle" onClick="toggle"></div>
  // state changes -> re-render
  const handleToggle = () => {
    // setOn(callback) -> setOn(prevState => !previousState)
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
