import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Button,
  Box,
  Stack,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        {/* Logo Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            minWidth: { xs: 'auto', md: 240 },
          }}
        >
          <Box
            component="img"
            src="/tiktok-logo.svg"
            alt="TikTok"
            sx={{
              height: 42,
              cursor: 'pointer',
              // Fallback nếu không có logo
              '&[alt]': {
                width: 118,
                height: 42,
              },
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Text fallback */}
          <Box
            sx={{
              display: 'none',
              fontSize: 24,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            TikTok
          </Box>
        </Box>

        {/* Search Bar - Hidden on mobile */}
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: 500,
            mx: { xs: 2, md: 4 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <TextField
            fullWidth
            placeholder="Tìm kiếm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(22, 24, 35, 0.06)',
                '&:hover': {
                  backgroundColor: 'rgba(22, 24, 35, 0.12)',
                },
                '&.Mui-focused': {
                  backgroundColor: 'rgba(22, 24, 35, 0.06)',
                  border: '1px solid rgba(22, 24, 35, 0.2)',
                },
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Divider orientation="vertical" sx={{ height: 28, mr: 1 }} />
                  <IconButton size="small" sx={{ color: 'rgba(22, 24, 35, 0.34)' }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Right Actions */}
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Upload Button - Desktop only */}
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            sx={{
              display: { xs: 'none', md: 'flex' },
              textTransform: 'none',
              borderColor: 'rgba(0, 0, 0, 0.12)',
              color: 'black',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.03)',
                borderColor: 'rgba(0, 0, 0, 0.12)',
              },
            }}
          >
            Tải lên
          </Button>

          {/* Messages - Desktop only */}
          <IconButton sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
            <MessageIcon />
          </IconButton>

          {/* Notifications - Desktop only */}
          <IconButton sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
            <NotificationsIcon />
          </IconButton>

          {/* User Avatar */}
          <Avatar
            sx={{
              width: 32,
              height: 32,
              cursor: 'pointer',
              border: '1px solid rgba(0, 0, 0, 0.12)',
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png"
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;