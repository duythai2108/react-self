import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (event) => {
    setTextAreaHeight("auto");
    // setParentHeight(`${textareaRef?.current.scrollHeight}px`);

    setText(event.target.value);
  };

  useEffect(() => {
    setTextAreaHeight(`${textareaRef?.current.scrollHeight}px`);
    // setParentHeight(`${textareaRef?.current.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        className="transition-all w-full outline-none overflow-hidden  max-w-[400px] rounded-lg border border-gray-400 p-5 focus:border-blue-300 leading-normal resize-none"
        placeholder="Enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
