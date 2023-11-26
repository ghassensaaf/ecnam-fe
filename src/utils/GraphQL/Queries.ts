/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const USER_PATIENTS = gql`
  query Query {
    userPatients {
      id
      firstname
      lastname
    }
  }
`;

export const ME = gql`
  query Query {
    me {
      id
      firstname
      lastname
      email
      username
      isActive
      insureds {
        id
        firstname
        lastname
      }
    }
  }
`;
