import React, { useState } from "react";
// styles
import GlobalStyles from "./components/GlobalStyles.js";
// Pages
import TimerPage from "./pages/TimerPage.js";
import RecipePage from "./pages/RecipePage.js";
// components
import Burger from "./components/Burger.js";

function App() {

  const [inputSeconds, setInputSeconds] = useState(120);
  const [pause, setPause] = useState(true);

  return (
    <div className="App">
      <GlobalStyles />
      <Burger />
      <RecipePage />
      <TimerPage inputSeconds={inputSeconds} setInputSeconds={setInputSeconds} pause={pause} setPause={setPause} />
    </div>
  );
}

export default App;
