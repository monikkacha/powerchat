import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from './components/Header';
import Login from './components/Login';
import SingUp from './components/SingUp';
import firebaseApp from "./firebaseInit";
import { Dashboard } from "./components/Dashboard";
import { ProfileDetail } from "./components/ProfileDetail";
import { useSelector , useDispatch} from 'react-redux';
import { updateLoggedInStatus } from "./redux/actions/setFirebaseUser";
import './App.css';

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.firebaseUserReducer);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      
      
      if (user === null){
        dispatch(updateLoggedInStatus(false));
        return;
      }

      if (Object.keys(state.userData).length !== 0) {
        state.userData.uid = user.uid;
        addUserOnFirebase();
      } else {
        console.log("got user");
        dispatch(updateLoggedInStatus(true));
      }
    }
    );
  }, []);

  const addUserOnFirebase = () => {
    firebaseApp.database().ref("Users")
      .child(state.userData.uid)
      .set(state.userData)
      .then(
        (data) => {
          dispatch(updateLoggedInStatus(true));
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
                {state.isUserLoggedIn ? <Dashboard /> : <Login />}
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
