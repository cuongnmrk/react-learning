import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Avatar, Box } from '@mui/material';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Message as MessageIcon,
} from '@mui/icons-material';

const MobileBottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        zIndex: 1000,
        backgroundColor: 'white',
        '& .MuiBottomNavigationAction-root': {
          minWidth: 'auto',
          padding: '6px 12px',
        },
        '& .MuiBottomNavigationAction-label': {
          fontSize: '10px',
          marginTop: '4px',
        },
        '& .Mui-selected': {
          fontSize: '10px',
        },
      }}
    >
      <BottomNavigationAction
        label="Trang chủ"
        icon={<HomeIcon />}
        sx={{
          '&.Mui-selected': {
            color: 'primary.main',
          },
        }}
      />
      <BottomNavigationAction
        label="Khám phá"
        icon={<SearchIcon />}
        sx={{
          '&.Mui-selected': {
            color: 'primary.main',
          },
        }}
      />
      <BottomNavigationAction
        icon={
          <Box
            sx={{
              width: 36,
              height: 28,
              background: 'linear-gradient(45deg, #25F4EE 0%, #FE2C55 50%, #F00044 100%)',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <AddIcon sx={{ fontSize: 20 }} />
          </Box>
        }
      />
      <BottomNavigationAction
        label="Hộp thư"
        icon={<MessageIcon />}
        sx={{
          '&.Mui-selected': {
            color: 'primary.main',
          },
        }}
      />
      <BottomNavigationAction
        label="Hồ sơ"
        icon={
          <Avatar
            sx={{
              width: 24,
              height: 24,
              border: '1px solid rgba(0, 0, 0, 0.12)',
            }}
            src="https://i.pravatar.cc/150?img=10"
          />
        }
        sx={{
          '&.Mui-selected .MuiAvatar-root': {
            border: '2px solid #fe2c55',
          },
        }}
      />
    </BottomNavigation>
  );
};

export default MobileBottomNav;