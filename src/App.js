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
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destinations from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

export const UserContext = createContext();

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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destinations></Destinations>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Destinations></Destinations>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
