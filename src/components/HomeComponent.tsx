import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function HomeComponent() {
  const { t } = useTranslation();
  return (
    <Box>
      <CssBaseline />
      <Container>
        <Typography variant="h3" component="h1">
          {t('HomePage.heading')}
        </Typography>
        <Typography variant="subtitle1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>
    </Box>
  );
}

export default HomeComponent;
