import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileBottomNav from './MobileBottomNav';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar />

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginLeft: { xs: 0, md: '240px' },
            overflowY: 'auto',
            backgroundColor: '#f8f8f8',
            paddingBottom: { xs: '70px', md: 0 },
          }}
        >
          {children}
        </Box>
      </Box>

      <MobileBottomNav />
    </Box>
  );
};

export default MainLayout;