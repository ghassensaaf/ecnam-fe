/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unescaped-entities */
// src/CoolNotFound.tsx
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const CoolNotFound: React.FC = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

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
      <animated.div style={props}>
        <Typography variant="h1" color="textPrimary" gutterBottom>
          404 Not Found
        </Typography>
        <Typography variant="h4" color="textSecondary" paragraph>
          Oops, it looks like you're lost!
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          Go to Home
        </Button>
      </animated.div>
    </Container>
  );
};

export default CoolNotFound;
