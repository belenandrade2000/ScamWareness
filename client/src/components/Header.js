import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header style={{"display": "flex", "flexDirection": "row"}}>
      <div >
        <Link className="text-dark" to="/">
          <h1 style={{ "fontSize": '3rem',"display": "flex", "justifyContent": "flex-start"}}>
            CardGenie
          </h1>
        </Link>
       
        <div>
          {Auth.loggedIn() ? (
            <>
           <button> Credit Cards</button>
           <button> Home</button>
           <button> My Profile</button>
          <button onClick={logout}>Logout</button>

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
