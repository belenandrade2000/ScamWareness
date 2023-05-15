const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type CreditCard {
    id: ID!
    ccName: String
    ccType: String
    ccBenefits: String
    ccAnnualFee: String
    ccLink: String
    ccImage: String
  }

 type Query {
    creditCards: [CreditCard]
    creditCard(creditCardId: ID): CreditCard
    users: [User]
    user(username: String): User
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    #is this right?
    #addSavedCC(profileId: ID!, skill: String!): Profile
    #removeProfile: Profile


  }
`;

module.exports = typeDefs;