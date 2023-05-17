import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SearchCards from './pages/SearchCards';
import SavedCards from './pages/SavedCards';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import CreditCard from './pages/CCHome';
import Demo from "./pages/Demo";
// why is it this color?

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* add navbar here */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 

                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/creditcards"
                element={<CreditCard />}
              />
              <Route 
                path="/demo"
                element={<Demo />}
              />

              {/* <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              {/* 
              <Route 
                path="/creditcards/:creditcard"
                element={<CCHome />}

              /> */}

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;