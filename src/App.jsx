import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
// styles
import GlobalStyles from "./components/GlobalStyles";
// Pages
import TimerPage from "./pages/TimerPage";
import RecipePage from "./pages/RecipePage";
import HomePage from "./pages/WelcomePage";
// components
import Menu from "./components/Menu";
import Burger from "./components/Burger";

function App() {

  const [inputSeconds, setInputSeconds] = useState(0);
  const [devSeconds, setDevSeconds] = useState(0);
  const [fixSeconds, setFixSeconds] = useState(0);
  const [stopBathSeconds, setStopBathSeconds] = useState(0);
  const [rinseSeconds, setRinseSeconds] = useState(0);
  const [wettingAgentSeconds, setWettingAgentSeconds] = useState(0);
  const [intervalSeconds, setIntervalSeconds] = useState(0);
  const [pause, setPause] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="App">
      <GlobalStyles />
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/recipe" exact>
          <RecipePage
            inputSeconds={inputSeconds}
            setInputSeconds={setInputSeconds}
            devSeconds={devSeconds}
            setDevSeconds={setDevSeconds}
            fixSeconds={fixSeconds}
            setFixSeconds={setFixSeconds}
            stopBathSeconds={stopBathSeconds}
            setStopBathSeconds={setStopBathSeconds}
            rinseSeconds={rinseSeconds}
            setRinseSeconds={setRinseSeconds}
            wettingAgentSeconds={wettingAgentSeconds}
            setWettingAgentSeconds={setWettingAgentSeconds}
            intervalSeconds={intervalSeconds}
            setIntervalSeconds={setIntervalSeconds}
          />
        </Route>

        <Route path="/timer">
          <TimerPage
            inputSeconds={inputSeconds}
            setInputSeconds={setInputSeconds}
            devSeconds={devSeconds}
            setDevSeconds={setDevSeconds}
            fixSeconds={fixSeconds}
            setFixSeconds={setFixSeconds}
            stopBathSeconds={stopBathSeconds}
            setStopBathSeconds={setStopBathSeconds}
            rinseSeconds={rinseSeconds}
            setRinseSeconds={setRinseSeconds}
            wettingAgentSeconds={wettingAgentSeconds}
            setWettingAgentSeconds={setWettingAgentSeconds}
            intervalSeconds={intervalSeconds}
            setIntervalSeconds={setIntervalSeconds}
            pause={pause}
            setPause={setPause} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
