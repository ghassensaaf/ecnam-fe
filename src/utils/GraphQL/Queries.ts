/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

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
      firstname
      lastname
      insureds {
        id
        firstname
        lastname
      }
    }
  }
`;
