//Frameworks
import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';

//Main Component
class Home extends Component{
  
  //RenderComponent
  render(){
    return(
      <div  className="CardScreen">
        <div  className="Card">
          <div  className="CardContainer">
            <div  className="CardTitle">
              <h1>Welcome</h1>
            </div>
            <div  className="CardBody">
              <label>Do you want to search some music bands?</label>
              <NavLink  to="/bands" className="CardNavLink">Search bands</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
