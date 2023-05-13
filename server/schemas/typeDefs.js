const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type CreditCard {
    id: ID!
    name: String!
    benefits: [String!]!
    annualFee: Float!
  }

 type Query {
    creditCards: [CreditCard!]!
    creditCard(id: ID!): CreditCard!
  }

  type Mutation {
    addCreditCard(name: String!, benefits: [String!]!, annualFee: Float!): CreditCard!
    updateCreditCard(id: ID!, name: String, benefits: [String], annualFee: Float): CreditCard!
    deleteCreditCard(id: ID!): CreditCard!
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    savedcc: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth



    // is this right?
    addSavedCC(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile


  }
`;

module.exports = typeDefs;