import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Hero from './components/Hero'

function App() {
  return (
    <Router>
    <div className="App" >

      <Switch>
        <Route exact path="/">
          <Hero />

        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

