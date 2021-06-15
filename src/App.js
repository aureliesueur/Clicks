import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Boutique from './components/Boutique';
import Camera from './components/Camera';
import Cart from './components/Cart';
import Blog from './components/Blog';
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  const [cart, updateCart] = useState(savedCart ? savedCart : []);
  const [isLoggedIn, updateConnexion] = useState(false);
  return (
    <div className="container">
      <Router>
        <Nav cart={cart} isLoggedIn={isLoggedIn} updateConnexion={updateConnexion} />
        <Route path="/" exact component={Accueil} />
        <Route path="/apropos" component={Apropos} />
        <Route path="/boutique" exact>
          <Boutique cart={cart} updateCart={updateCart} />
        </Route>
        <Route path="/boutique/:id">
          <Camera cart={cart} updateCart={updateCart} />
        </Route>
        <Route path="/panier">
            <Cart cart={cart} updateCart={updateCart} />
        </Route>
        <Route path="/blog" component={Blog} />
        <Route path="/login">
          <Login isLoggedIn={isLoggedIn} updateConnexion={updateConnexion} />
        </Route>
        <Route path="/signup">
          <Signup isLoggedIn={isLoggedIn} updateConnexion={updateConnexion} />
        </Route>
      </Router>
    </div>
  );
}

export default App;

