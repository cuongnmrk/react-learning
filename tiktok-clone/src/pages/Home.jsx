import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        p: { xs: 2, md: 3 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: 'center',
          backgroundColor: 'white',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          TikTok  - Main Layout
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Giao diện đã được xây dựng với đầy đủ các component:
        </Typography>

        <Box sx={{ textAlign: 'left', maxWidth: 400, margin: '0 auto' }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ Header với logo, search và actions
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ Sidebar với menu navigation
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ Danh sách tài khoản đề xuất
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ Responsive design (Desktop & Mobile)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ Bottom navigation cho mobile
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ Custom TikTok theme
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 3,
            p: 2,
            backgroundColor: '#f0f0f0',
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            📝 Bước tiếp theo: 
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ Xây dựng Video Card & Video Feed
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ Side menu bên phải
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;