import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CC } from "../utils/queries";
import {SAVE_CARD} from "../utils/mutations"

const CCHome = () => {
  const { loading, data } = useQuery(QUERY_CC)
  const [addSavedCC] = useMutation(SAVE_CARD) 
  const cardArray = data?.creditCards || {}

function SaveCard (id) {
  try {
    console.log(id)
    const {data}=addSavedCC({
      variables:{creditCardId: id}
    })
  } catch (error) {
    
  }
}


  return (
    <div>
      <h1 style={{"textDecoration": "underline"}}>All Credit Cards</h1>

      <div style = {{display:"flex", width:"100%","flexWrap": "wrap",}}>
        {!loading && cardArray && cardArray.map((card) => {
          return (
            <div className="card" style={{"width": "32%", "border": "1px solid black", "padding": "10px 20px", "flex": "0 0 31%", "margin": "10px", "backgroundColor": "#A0B5F9"}}>
              <img src={card.ccImage} className="card-img-top"style={{"height": "200px", "width": "300px"}}/>
              <div className="card-body">
              <h5 className="card-title" style={{"fontSize": "20px", 'marginBottom': "1px"}}>{card.ccName}</h5>
              <h6 className="card-title"style={{"fontSize": "20px", "fontWeight": "normal"}}>Type: {card.ccType}</h6>
              <h6 className="card-title"style={{"fontSize": "20px", "fontWeight": "normal"}}>Annual Fee: {card.ccAnnualFee}</h6>
              <p className ="card-text"style={{"fontSize": "20px"}}> Benefits: {card.ccBenefits}</p>
              <a onClick={()=>SaveCard(card.id)} href="#" className="btn btn-primary">Save</a>
            </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default CCHome;



// background-color: #e5e5f7;
// opacity: 0.8;
// background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 36px ), repeating-linear-gradient( #a2c5fb55, #a2c5fb );