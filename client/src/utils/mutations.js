import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
export const ADD_CC = gql`
  mutation addCC($profileId: ID!, $skill: String!) {
    addCC(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;
export const REMOVE_CC = gql`
  mutation removeCC($skill: String!) {
    removeCC(skill: $skill) {
      _id
      name
      skills
    }
  }
`;
