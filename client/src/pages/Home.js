import React from 'react';
import { Link } from 'react-router-dom';


const styles = {
  explore: {
    backgroundColor: "black",
    color: "white",
    border: "2px solid black",
    textDecoration: "none",
    borderRadius: "8%",
    padding: "2px 5px 2px 5px"
  },

}

const Home = () => {

return (
  <div>
  <div style={{"marginTop": "40px","paddingBottom": "300px","paddingTop": "100px","textAlign": "center","color": "black","fontSize":"20px","fontWeight": "bold", "backgroundImage":"url(https://traveler.marriott.com/wp-content/uploads/2022/12/Choose_a_travel_rewards_credit_card.jpg)"}}>
      <div style ={{"fontFamily": "Amita, cursive"}} > Card Genie</div>
      <div> ·THE ULTIMATE CREDIT CARD LIBRARY·</div>
      <div> In search for a credit card? Stressed about which one to choose from the thousands of cards out there?</div>
      <div> Here you can view all credit cards, view them based on what you want, and compare benefits.</div>
      <div> If you want to save a credit card for future reference, add a like and it will be saved to your profile for easy access.</div>
      <div> Happy Searching!</div>

      <Link to="/creditcards" style={styles.explore}> Explore </Link>

  </div>
  </div>
);

};

  export default Home;


