// Material Components
import { Box, Container } from '@mui/material';
// router outlet
import { useOutlet } from 'react-router-dom';
import Navbar from '../components/common/layout/Navbar';

function DashboardLayout() {
  const outlet = useOutlet();
  return (
    <Box>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth={false}>{outlet}</Container>
      </Box>
    </Box>
  );
}
export default DashboardLayout;
