import React from "react";

const jsx = () => {
    const element = <div id="root">Hello world</div>;
    const elementR = React.createElement("div", { id: "root" }, "hello world");
    const element2 = (
      <div>
        <span>Hello</span> <span>World</span>
      </div>
    );
    return (
      <div>
        <div className="heading" id="heading">
          This is heading
        </div>
        <div className="heading2"></div>
      </div>
    );
};

export default jsx;
