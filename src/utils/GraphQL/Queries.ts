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
