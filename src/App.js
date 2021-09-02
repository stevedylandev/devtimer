import React, { useState } from "react";
import {Switch, Route} from "react-router-dom";
// styles
import GlobalStyles from "./components/GlobalStyles";
// Pages
import TimerPage from "./pages/TimerPage";
import RecipePage from "./pages/RecipePage";
import HomePage from "./pages/WelcomePage";
import MenuPage from "./pages/MenuPage";
// components
import Burger from "./components/Burger.js";

function App() {

  const [inputSeconds, setInputSeconds] = useState(0);
  const [pause, setPause] = useState(true);

  return (
    <div className="App">
      <GlobalStyles />
      <Burger />
      <MenuPage />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
    
        <Route path="/recipe" exact>
          <RecipePage inputSeconds={inputSeconds} setInputSeconds={setInputSeconds} />
        </Route>
        
        <Route path="/timer">
          <TimerPage inputSeconds={inputSeconds} setInputSeconds={setInputSeconds} pause={pause} setPause={setPause} />
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
