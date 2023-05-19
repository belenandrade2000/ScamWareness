import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div style={{"display": "flex", "flexDirection": "row"}}>
        <Link to="/">
          <h1 style={{ "fontSize": '4rem',"display": "flex", "justifyContent": "flex-start", "fontFamily": "Amita, cursive", "color": "black"}}>
            CardGenie
          </h1>
        </Link>
       
        <div style={{"position": "relative", "left": "55%"}}>
          {Auth.loggedIn() ? (
            <>
            <Link className="btn btn-dark" to="/creditcards" style ={{"marginLeft": "6px"}}>CreditCards</Link>
            <Link className="btn btn-dark" to="/" style ={{"marginLeft": "6px"}}>Home</Link>
            <Link className="btn btn-dark" to="/me" style ={{"marginLeft": "6px"}}>My Profile</Link>
          <button className="btn btn-dark" style ={{"marginLeft": "6px"}} onClick={logout}>Logout</button>

            </>
          ) : (
            <>
            <div>
              <Link className="btn btn-dark" to="/login" style ={{"margin": "5px"}}>
                Login
              </Link>
              <Link className="btn btn-dark" to="/signup">
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
