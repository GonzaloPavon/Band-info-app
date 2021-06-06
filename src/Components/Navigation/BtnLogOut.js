//Frameworks
import React, {useContext} from 'react';

//Context
import ImproveContext from '../../Context/improve-context';

//Main Component
function BtnLogOut(){

  const context = useContext(ImproveContext);

  //RenderComponent
  return(
    <button onClick={context.logout.bind(this)}  className="BtnLogOut">Log out</button>
  );
}

export default BtnLogOut;
