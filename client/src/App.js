import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import List from './components/List'


class App extends Component {
  render() {
    return (
     <>
     <Router>
       <div>
         <Navbar />
         <Route exact path='/' component={() => <Home />} />
         <Route exact path='/list' component={() => <List />} />
       </div>
     </Router>
     </>
    )
  }
}

export default App;
