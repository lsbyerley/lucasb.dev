import { ApolloProvider as ApolloClientProvider } from '@apollo/client';
import getLensApolloClient from '@/hooks/useLensApolloClient';

const ApolloProvider = ({ children }) => {
  const client = getLensApolloClient();
  return (
    <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
  );
};

export default ApolloProvider;
