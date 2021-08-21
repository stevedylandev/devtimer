import React, { useState } from "react";
import Timer from "./components/Timer.js";
import GlobalStyles from "./components/GlobalStyles.js";

function App() {

  const [inputSeconds, setInputSeconds] = useState(120);
  const [pause, setPause] = useState(true);

  return (
    <div className="App">
      <GlobalStyles />
      <Timer inputSeconds={inputSeconds} setInputSeconds={setInputSeconds} pause={pause} setPause={setPause} />
    </div>
  );
}

export default App;
