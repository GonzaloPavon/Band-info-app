//Frameworks
import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Styles
import './App.css';
import './Styles/CssMaster.css';
import './Icons/icons.css'

//Context
import ImproveContext from './Context/improve-context';

//Components
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/Users/Login';
import Home from './Components/Home';
import BandsList from './Components/BandsList/BandsList';
import BandInfo from './Components/Bands/BandInfo';

//Main Component
class App extends Component {
  //State
  state = {
    auth: false
  }
  //Functions
  logout = () => {
    localStorage.removeItem('name');
    window.location = '/';
  }
  //RenderComponent
  render(){
    let isLoggedIn = localStorage.getItem('name')!=null;
    return (
      <ImproveContext.Provider value={{auth:this.state.auth,logout:this.logout}}>
        <BrowserRouter>
          <div>
            <Navigation />
            {isLoggedIn ? (
              <Switch>
                  <Route exact path="/" render={()=>(
                    isLoggedIn ? (<Home/>):(<Login/>)
                  )}/>
                  <Route  path='/band/:id'  component={BandInfo}/>
                  <Route  path='/bands'  component={BandsList}/>
              </Switch>
              ):(
              <Switch>
                <Route exact path="/" render={()=>(
                  isLoggedIn ? (<Home/>):(<Login/>)
                )}/>
              </Switch>
              )
            }
          </div>
        </BrowserRouter>
      </ImproveContext.Provider>
    );
  }
}

export default App;
