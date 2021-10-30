import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from './components/Header';
import Login from './components/Login';
import SingUp from './components/SingUp';
import firebaseApp from "./firebaseInit";
import { Dashboard } from "./components/Dashboard";
import { ProfileDetail } from "./components/ProfileDetail";
import { useSelector, useDispatch } from 'react-redux';
import { updateLoggedInStatus, addUserId } from "./redux/actions/setFirebaseUser";
import './App.css';

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.firebaseUserReducer);

  useEffect(() => listenForData(), []);

  const listenForData = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user === null) {
        dispatch(updateLoggedInStatus(false));
      } else {
        dispatch(updateLoggedInStatus(true));
      }
    });
  }

  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="App">
            <div className="body-block">
              <Header />
              <Route path="/" exact>
                {state.isUserLoggedIn ? <Dashboard /> : <Login />}
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <SingUp />
              </Route>
              <Route path="/dashboard" exact>
                <Dashboard />
              </Route>
              <Route path="/profile-detail" exact>
                <ProfileDetail />
              </Route>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;