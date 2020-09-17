import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation'

import Cart from './Components/Cart'
import Home from './Components/Home'
import Displayitem from './Containers/Displayitem'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/Cart" component={Cart} />
        <Route path="/Displayitem" component={Displayitem} />
      </main>
    </React.Fragment>
    );
  }
}

export default App;
