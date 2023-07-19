import React, { useEffect, useState } from "react";

const Counter = () => {
  // stale state
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  const [info, setInfo] = useState({
    firstName: "duy",
    lastName: "thai",
  });
  useEffect(() => {
    console.log("from input");
  }, [info.lastName]);
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-blue-400 text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
