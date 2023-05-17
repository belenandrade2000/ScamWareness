const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  savedCC: [CreditCard]
}

type CreditCard {
    id: ID!
    ccName: String
    ccType: String
    ccBenefits: String
    ccAnnualFee: String
    ccLink: String
    ccImage: String
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
   
}

 type Query {
    creditCards: [CreditCard]
    creditCard(creditCardId: ID): CreditCard
    users: [User]
    user(username: String): User
    reviews: [Review]
    review: Review
    me: User
  }


  type Auth {
    token: ID!
   
  }

  type Mutation {
    addUser(email: String, username: String, password: String): Auth  
    login(email: String!, password: String!): Auth
    addReview(reviewText: String): Review
    addSavedCC(CreditCardId: ID): User

      


  
   


  }
`;

module.exports = typeDefs;

// add remove saved cc

