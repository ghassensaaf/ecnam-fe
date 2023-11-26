import gql from 'graphql-tag';

export const SIGN_IN = gql`
  mutation Login($user: LoginUserInput!) {
    login(user: $user) {
      user {
        id
        firstname
        lastname
        username
        email
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($createUserInput: CreateUserInput!) {
    signup(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const SIGN_OUT = gql`
  mutation Mutation($createUserInput: CreateUserInput!) {
    signup(createUserInput: $createUserInput) {
      id
    }
  }
`;
