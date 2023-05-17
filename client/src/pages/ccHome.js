import React from 'react';
// its a string before you converrt it into function
import { useQuery } from '@apollo/client';
import { QUERY_CC } from "../utils/queries"

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

      <div class="row row-cols-1 row-cols-md-3 g-4">
        {!loading && cardArray && cardArray.map((card) => {
          return (
            <div>
              {card.ccName},
              {card.ccType},
            </div>
          )
        })}



      </div>

    </div>
  );
}

export default CCHome;