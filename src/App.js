import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/404/NotFound';

//Pages
import Home from'./pages/home/Home';
import Login from'./pages/login/Login';
import Signup from'./pages/signup/Signup';
import movieDetail from'./pages/movieDetail/movieDetail';


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
              <Route exact path='/media/:id' component={movieDetail} />
              <Route path='*' component={NotFound} />
            </Switch>
          <Footer/>   {/*    Footer   */}
        </Router>
      </div>
    );
  }
}

export default App;
