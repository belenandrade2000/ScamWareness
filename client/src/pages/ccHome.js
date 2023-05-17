import React from 'react';
// its a string before you converrt it into function
import { useQuery } from '@apollo/client';
import { QUERY_CC } from "../utils/queries";


const CCHome = () => {
  const { loading, data } = useQuery(QUERY_CC)
  // make graphql request
  // to get credit card data
  // then map through credit card data
  // print in the cards 
  const cardArray = data?.creditCards || {}
  return (
    <div>
      <h1>All Credit Cards</h1>

      <div>
        {!loading && cardArray && cardArray.map((card) => {
          return (
            <div className="card" style={{"width": "18rem"}}>
              <img src={card.ccImage} className="card-img-top"/>
              <div className="card-body">
              <h5 className="card-title">{card.ccName}</h5>
              <h6 className="card-title">{card.ccType}</h6>
              <h6 className="card-title">{card.ccAnnualFee}</h6>
              <p className ="card-text">{card.ccBenefits}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default CCHome;