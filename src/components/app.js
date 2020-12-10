import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./navbar"
import AllURLs from "./allURLs"
import AddURL from "./addURL"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={AddURL} />
              <Route path="/all-urls" component={AllURLs} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
