/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';
import PrivateRoutes from './guards/PrivateRoutes.guard';
import PublicRoutes from './guards/PublicRoutes.guard';
import DashboardLayout from './layouts/DashboardLayout';
import { UseIsAuth } from './hooks/auth/UseIsAuth';
import { login, logout } from './features/auth/authSlice';

// Lazy Loading Pages
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/Signin'));
const NotFound = lazy(() => import('./pages/errors/NotFound'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#507C5C',
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
        <Route element={<PrivateRoutes component={DashboardLayout} />}>
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
        </Route>
        <Route
          path="/signin"
          element={
            <React.Suspense>
              <PublicRoutes component={SignIn} />
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
