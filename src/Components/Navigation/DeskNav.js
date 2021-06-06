//Frameworks
import React from 'react';
import  { NavLink } from 'react-router-dom';

//Main Component
function DeskNav  (props){
    return(
      <div  className="DeskNav">
        <ul className="NavbarUlE">
          <div className="NavbarLogoE"><NavLink exact to="/" className='NavbarNavLinkLogoE'>Home</NavLink></div>
          <div  className="NavbarLiListE">
            <li className="NavbarLiE"><NavLink to="/bands" className='NavbarNavLinkE'>Bands</NavLink></li>
            <li className="NavbarLiE"><div  className='NavbarNavLinkE'>{props.BtnLogOut}</div></li>
          </div>
        </ul>
      </div>
    )
}

export default DeskNav;
