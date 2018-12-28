import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from 'views/HomePage'
import NotFound from 'views/NotFound'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App;
