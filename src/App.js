import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from './components/Header';
import Login from './components/Login';
import SingUp from './components/SingUp';
import firebaseApp from "./firebaseInit";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import './App.css';
import { ProfileDetail } from "./components/ProfileDetail";
import store from "./redux/store";
import { useSelector } from 'react-redux';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const state = useSelector((state) => state.firebaseUserReducer);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (Object.keys(state.userData).length !== 0) {
        addUserOnFirebase();
      } else {
        setIsLoggedIn(true);
      }
    }
    );
  }, []);

  const addUserOnFirebase = () => {
    firebaseApp.database().ref("Users").push(state.userData).then(
      (data) => {
        setIsLoggedIn(true);
      }).catch((err) => {
        console.log(err);
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
                {isLoggedIn ? <Dashboard /> : <Login />}
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <SingUp />
              </Route>
              <Route path="/dashboard" exact>
                <SingUp />
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
