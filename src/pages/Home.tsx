import { Box, Container, Grid } from '@mui/material';
import HomeComponent from '../components/HomeComponent';

export default function Home() {
  return (
    <Box sx={{ pt: '6rem' }}>
      {/* <Grid container spacing={2} sx={{ pt: '5rem' }}>
        <Grid
          display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
          item
          xs={0}
          sm={0}
          lg={2}
        />
        <Grid item xs={12} sm={12} lg={8}>
          
        </Grid>
        <Grid
          display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
          item
          xs={0}
          sm={0}
          lg={2}
        />
      </Grid> */}
      <Container>
        <HomeComponent />
      </Container>
    </Box>
  );
}
