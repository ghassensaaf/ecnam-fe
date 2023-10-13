import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

// Lazy Loading Pages
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/errors/NotFound'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#305CE9',
    },
    secondary: {
      main: '#727881',
    },
    success: {
      main: '#66bb6a',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffa726',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense>
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

function BootstrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default BootstrappedApp;
