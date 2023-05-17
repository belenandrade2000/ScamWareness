import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(name: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
// need help with these two
export const ADD_SAVEDCC = gql`
  mutation addCC($profileId: ID!, $skill: String!) {
    addCC(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;
export const REMOVE_SAVEDCC = gql`
  mutation removeCC($skill: String!) {
    removeCC(skill: $skill) {
      _id
      name
      skills
    }
  }
`;
