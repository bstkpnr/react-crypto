import React from "react";
import Home from "./component/Home";
import Coin from "./component/Coin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoinContext from "./context/CoinContext";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const getCryptoName = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <CoinContext>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home search={search} getCryptoName={getCryptoName} />
            </Route>
            <Route path="/:id" component={Coin} />
          </Switch>
        </BrowserRouter>
      </CoinContext>
    </div>
  );
}

export default App;