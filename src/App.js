import React, { useState } from "react";
import Timer from "./components/Timer.js";
import GlobalStyles from "./components/GlobalStyles.js";

function App() {
  const [inputSeconds, setInputSeconds] = useState(120);

  return (
    <div className="App">
      <GlobalStyles />
      <Timer props={inputSeconds} />
    </div>
  );
}

export default App;
