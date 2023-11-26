/* eslint-disable import/extensions */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

// internationalization
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

import App from './App';
import store from './app/store';
import './index.css';

i18n.use(LanguageDetector).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
  },
  fallbackLng: 'en', // Fallback language in case the user's preferred language is not available.
  debug: import.meta.env.MODE === 'development',
});

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
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ApolloProvider>
  </Provider>
);
