//Frameworks
import React, { useState  } from 'react';
import {  NavLink } from 'react-router-dom';

//Components
import DeskNav from './DeskNav';
import MobileNav from './MobileNav';
import BtnLogOut from './BtnLogOut';

//Main Component
function Navigation(props){

  //State
  const [show, setShow] = useState(false);

  let name = localStorage.getItem('name');

  //Functions
  const stateChange = ()  =>{
    setShow(!show)
  }

  //RenderComponent
	if (name==='admin'){
		return (
			<ul className="Navbar">
        <DeskNav  BtnLogOut={<BtnLogOut/>}/>
        <ul className="NavbarUlM">
          <div  className="NavbarMenuM">
            <li className="NavbarLogoM"><NavLink  exact to="/"  className='NavbarNavLinkM'>Home</NavLink></li>
            <div  className="NavbarBotonM"><button className="iconMenu" onClick={stateChange}></button></div>
          </div>
          <MobileNav state={show}  stateChange={stateChange} BtnLogOut={<BtnLogOut/>}/>
        </ul>
		  </ul>
		);
	}else {
			return null;
		}
}


export default Navigation;
