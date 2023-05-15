import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

//our code here
return (
  <div>
      <div> Card Genie</div>
      <div> THE ULTIMATE CREDIT CARD LIBRARY</div>
      <div> In search for a credit card? Stressed about which one to choose from the thousands of cards out there? Here you can view all credit cards, view them based on what you want, and compare benefits. If you want to save a credti card for future reference, add a like and it will be saved to your profile for easy access. You can even see and leave reviews about each credit card. </div>
      <Link to="/credit-cards/all"> Explore </Link>
  </div>
);

};

  export default Home;