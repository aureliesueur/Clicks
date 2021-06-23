import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from "react";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Boutique from './components/Boutique';
import Camera from './components/Camera';
import Cart from './components/Cart';
import Blog from './components/Blog';
import Login from './components/Login';
import Signup from './components/Signup';
import Confirmation from './components/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  const savedUser = JSON.parse(localStorage.getItem('user'));
  const savedConnection = JSON.parse(localStorage.getItem('login'));
  const [cart, updateCart] = useState(savedCart ? savedCart : []);
  const [isLoggedIn, updateConnexion] = useState(savedConnection ? true : false);
  const [currentUser, setCurrentUser] = useState(savedUser ? savedUser : {});
  console.log(savedUser);
  console.log(savedConnection);

  return (
    <div className="container">
      <Router>
        <Nav cart={cart} isLoggedIn={isLoggedIn} updateConnexion={updateConnexion} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Route path="/" exact component={Accueil} />
        <Route path="/apropos" component={Apropos} />
        <Route path="/boutique" exact>
          <Boutique cart={cart} updateCart={updateCart} />
        </Route>
        <Route path="/boutique/:id">
          <Camera cart={cart} updateCart={updateCart} />
        </Route>
        <Route path="/panier">
            <Cart cart={cart} updateCart={updateCart} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/blog" component={Blog} />
        <Route path="/login">
          <Login isLoggedIn={isLoggedIn} updateConnexion={updateConnexion} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/signup">
          <Signup isLoggedIn={isLoggedIn} updateConnexion={updateConnexion} />
        </Route>
        <Route path="/confirmation" component={Confirmation} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

