import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom'

// COMPONENTS
import MainForm from "./components/MainForm";
import Success from './components/Success';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={MainForm} />
      <Route path='/success' component={Success} />
      <Route path='/admin' component={AdminPanel} />
    </Switch>
    </>
  );
}

export default App;
