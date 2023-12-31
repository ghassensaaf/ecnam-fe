/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/client';
import { ME } from '../../utils/GraphQL/Queries';

export const UseIsAuth = () => {
  const { data, loading } = useQuery(ME);

  return { data, loading };
};
