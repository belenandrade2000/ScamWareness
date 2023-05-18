import React from 'react';
import { Link } from 'react-router-dom';




const Home = () => {

return (
  <div>
  <div style={{"marginTop": "40px","paddingBottom": "300px","paddingTop": "100px","textAlign": "center","color": "white","fontSize":"20px","fontWeight": "bold", "backgroundImage":"url(https://media.istockphoto.com/id/1379685774/vector/happy-young-man-holding-big-bank-credit-card.jpg?s=612x612&w=0&k=20&c=t1PmAXKSRG6afbef1pqDi0iXiVygjHwF_TsZufWn3C0=)" }}>
      <div > Card Genie</div>
      <div> THE ULTIMATE CREDIT CARD LIBRARY</div>
      <div> In search for a credit card? Stressed about which one to choose from the thousands of cards out there?</div>
      <div> Here you can view all credit cards, view them based on what you want, and compare benefits.</div>
      <div> If you want to save a credit card for future reference, add a like and it will be saved to your profile for easy access.</div>
      <div> Happy Searching!</div>

      <Link to="/creditcards" style = {{"backgroundColor": "black", "color": "white", "border": "2px solid black", "textDecoration": "none"}}> Explore </Link>

  </div>
  </div>
);

};

  export default Home;


  // hover on explore
  // bckimg opacity
  // change font
