import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import App from './App';
import './index.css';
import store from './app/store';

const API_URL = import.meta.env.VITE_API_URL || 'http://192.168.1.112:9009';
const link = createHttpLink({
  uri: `${API_URL}/graphql`,
  credentials: 'include',
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
