import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Hero from './components/Hero';
import Button1 from './components/Button1'

function App() {
  return (
    <Router>
    <div className="App" >

      <Switch>
        <Route exact path="/">
          <Hero />
          <Button1 />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

