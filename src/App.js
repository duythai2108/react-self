import React, { useState } from "react";
import Count from "./components/advanced-react/performance/Count";

const App = () => {
  const [filter, setFilter] = useState(0);

  return (
    <div>
      <input
        type="text"
        className="p-3 rounded border border-gray-300"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count></Count>
    </div>
  );
};

export default App;
