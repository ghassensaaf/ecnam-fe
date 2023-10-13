import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box>
      <Container>
        <Typography variant="h3" component="h1">
          404 Page Not Found
        </Typography>
        <Link to="/">Home page</Link>
      </Container>
    </Box>
  );
}

export default NotFound;
