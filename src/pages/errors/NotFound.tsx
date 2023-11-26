/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unescaped-entities */
// src/CoolNotFound.tsx
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CoolNotFound: React.FC = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Typography variant="h1" color="textPrimary" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="h4" color="textSecondary" paragraph>
        Oops, it looks like you're lost!
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Home
      </Button>
    </Container>
  );
};

export default CoolNotFound;
