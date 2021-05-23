import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login'; 
import Registration from './pages/Registration';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CardList from './components/CardList'
import CardCreation from './components/CardCreation';
function App() {
  return (
    <Router>
    <div className="wrapper">
      <Nav />
      <Switch>
        <Route exact path="/">
          <CardList />
          <CardCreation />
        </Route>
        <Route  path="/login" render={(props) => <Login {...props}/>}/>
        <Route  path="/reg" render={(props) => <Registration {...props}/>}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
