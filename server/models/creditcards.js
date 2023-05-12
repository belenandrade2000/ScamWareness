const { Schema, model } = require('mongoose');


const creditCardsSchema = new Schema({
  ccName: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  ccType: {
    type: String,
    required: true,
    trim: true,
  },
  ccBenefits: {
    type: String,
    required: true,
    trim: true,
  },
  ccAnnualFee: {
    type: String,
    required: true,
    trim: true,
  },
  ccIntroOffer: {
    type: String,
    required: true,
    trim: true,
  },
  ccLink: {
    type: String,
    required: true,
    trim: true,
  },
  ccExtraInfo: {
    type: String,
    required: true,
    trim: true,
  },
 
});

const creditCard = model('CreditCard', creditCardsSchema);

module.exports = creditCard;