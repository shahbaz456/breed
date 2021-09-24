import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Fav from "./components/Fav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/landing" />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/favourite" component={Fav} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
