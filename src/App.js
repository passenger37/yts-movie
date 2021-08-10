import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

//Components
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

//Pages
import Home from'./pages/home/Home';
import Login from'./pages/login/Login';
import Signup from'./pages/signup/Signup';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>  {/*    Header   */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          <Footer/>   {/*    Footer   */}
        </Router>
      </div>
    );
  }
}

export default App;
