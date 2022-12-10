import { ApolloClient, InMemoryCache } from '@apollo/client';

let lensApolloClient;

const useLensApolloClient = () => {
  const API_URL = 'https://api.lens.dev';

  return new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });
};

const getLensApolloClient = () => {
  if (lensApolloClient) return lensApolloClient;

  lensApolloClient = useLensApolloClient();
  return lensApolloClient;
};

export default getLensApolloClient;
