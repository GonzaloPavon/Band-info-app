//Frameworks
import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';

//Main Component
class MobileNav  extends Component{

  //RenderComponent
  render(){
    if (this.props.state === true){
      return (
        <div  className="NavbarLiListM">
          <li className="NavbarLiM"><NavLink to="/bands" className='NavbarNavLinkM'  onClick={this.props.stateChange}>Bands</NavLink></li>
          <li className="NavbarLiSOM"><div className='NavbarNavLinkM'>{this.props.BtnLogOut}</div></li>
        </div>
      )
    }
    else {
      return (null)
    }
  }
}

export default MobileNav;
