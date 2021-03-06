import React, { Component } from 'react';
import Menu from './Menu'
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path="/" component={Menu}/>
        </div>
    );
  }
}

export default App;
