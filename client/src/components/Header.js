import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header >
      <div style={{"display": "flex", "flexDirection": "row"}}>
        <Link className="text-dark" to="/">
          <h1 style={{ "fontSize": '3rem',"display": "flex", "justifyContent": "flex-start"}}>
            CardGenie
          </h1>
        </Link>
       
        <div style={{"display": "flex", "justifyContent": "flex-end"}}>
          {Auth.loggedIn() ? (
            <>
           <button style={{"backgroundColor": "blue", "borderRadius": "5px", "color": "white", "border": "none", "marginLeft": "3px"}}> Credit Cards</button>
           <button style={{"backgroundColor": "blue", "borderRadius": "5px", "color": "white", "border": "none",  "marginLeft": "3px"}}> Home</button>
           <button style={{"backgroundColor": "blue", "borderRadius": "5px", "color": "white", "border": "none",  "marginLeft": "3px"}}> My Profile</button>
          <button style={{"backgroundColor": "blue", "borderRadius": "5px", "color": "white", "border": "none",  "marginLeft": "3px"}} onClick={logout}>Logout</button>

            </>
          ) : (
            <>
            <div style={{"display": "flex", "justifyContent": "flex-end"}}>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
