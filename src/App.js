import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destinations from './Components/Destination/Destinations';

export const UserContext = createContext();
//

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destinations">
            <Destinations></Destinations>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <PrivateRoute path="/destination/:id/">
            <Destinations></Destinations>
          </PrivateRoute>
          <Route path="*">
            <h1 className="text-center my-5">404 - Not Found!</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
