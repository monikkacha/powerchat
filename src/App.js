import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import SingUp from './components/SingUp';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="App">
            <div className="body-block">
              <Header />
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <SingUp />
              </Route>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
