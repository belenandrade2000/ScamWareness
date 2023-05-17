import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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

export const SAVE_CARD = gql`
  mutation saveCard($cardData: CardInput!) {
    saveCard(cardData: $cardData) {
      _id
      username
      email
      savedCards {
        cardId
        image
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_CARD = gql`
  mutation removeCard($cardId: ID!) {
    removeCard(cardId: $cardId) {
      _id
      username
      email
      savedCards {
        cardId
        image
        description
        title
        link
      }
    }
  }
`;
