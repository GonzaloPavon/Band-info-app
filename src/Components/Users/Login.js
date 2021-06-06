//Frameworks
import React, { useState } from 'react';

//Main Component
function Login () {
	//State
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [loginErrors,setLoginErrors] = useState(false);

//Functions
  const onSubmit  = async (event) =>  {
    event.preventDefault();
    if (email.email === 'admin' &&  password.password === '123456') {
      console.log('Sigin');
      localStorage.setItem('name',email.email);
      window.location = '/';
    }
    else {
      console.log('Usuario o contraseña no validos');
			setLoginErrors('usuario o contraseña incorrecto/as')
    }
  }
  const onInputChange = (set, field, value) => {
    set({[field]: value});
  };
		//RenderComponent
		return(
			<div  className="UserScreen">
				<div  className="Card">
			  	<div  className="Container">
			    	<h3 className="CardTitle">Login</h3>
			      <form className="CardForm" onSubmit={onSubmit}>
				      <label htmlFor="user">User</label>
	            <input  type="text"
	                    placeholder="user"
	                    onChange={event => onInputChange(setEmail, "email", event.target.value)}/>
				      <label htmlFor="pass">Password</label>
	            <input  type="text"
	                    placeholder="password"
	                    onChange={event => onInputChange(setPassword, "password", event.target.value)}/>
				      {(!loginErrors) ? null : (<div className="LoginError">{loginErrors}</div>)}
				      <React.Fragment>
							<input type="submit" value="Log in"/>
							</React.Fragment>
			      </form>
			   </div>
			 </div>
			</div>
		);
}

export default Login;
