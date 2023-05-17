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
      <h1 style={{"textDecoration": "underline"}}>All Credit Cards</h1>

      <div>
        {!loading && cardArray && cardArray.map((card) => {
          return (
            <div> 
            <div className="card" style={{"width": "18rem", "border": "1px solid black", "padding": "10px", "display": "flex", "flexDirection": "row", "flexWrap": "wrap"}}>
              <img src={card.ccImage} className="card-img-top"style={{"height": "200px", "width": "300px"}}/>
              <div className="card-body">
              <h5 className="card-title" style={{"fontSize": "20px", 'marginBottom': "1px"}}>{card.ccName}</h5>
              <h6 className="card-title"style={{"fontSize": "20px", "fontWeight": "normal"}}>Type: {card.ccType}</h6>
              <h6 className="card-title"style={{"fontSize": "20px", "fontWeight": "normal"}}>Annual Fee: {card.ccAnnualFee}</h6>
              <p className ="card-text"style={{"fontSize": "20px"}}> Benefits: {card.ccBenefits}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default CCHome;