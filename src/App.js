import React, { useState } from "react";
import GlobalStyles from "./components/GlobalStyles.js";
import TimerPage from "./pages/TimerPage.js";

function App() {

  const [inputSeconds, setInputSeconds] = useState(120);
  const [pause, setPause] = useState(true);

  return (
    <div className="App">
      <GlobalStyles />
      <TimerPage inputSeconds={inputSeconds} setInputSeconds={setInputSeconds} pause={pause} setPause={setPause} />
    </div>
  );
}

export default App;
