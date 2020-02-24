import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Transit from './components/transit'

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Transit} />
      </Router>
    </div>
  );
}

export default App;