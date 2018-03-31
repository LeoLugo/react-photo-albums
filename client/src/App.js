import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Albumsview from './Albumsview.js'
import {Provider} from 'react-redux'
import store from './store.js'
import Albumsum from './Albumsum'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
        	  <Route exact path="/" component={Albumsview} />
        	  <Route path="/album/:id" component={Albumsum} />
        	</div>
        </Router>
      </Provider>
    );
  }
}

export default App;
