import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
  Stack,
  Button,
  Avatar,
} from '@mui/material';
import {
  Home as HomeIcon,
  People as PeopleIcon,
  PlayCircle as PlayCircleIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { suggestedAccounts } from '../../utils/mockData';

const DRAWER_WIDTH = 240;

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showMoreSuggested, setShowMoreSuggested] = useState(false);

  const menuItems = [
    { icon: <HomeIcon />, text: 'Dành cho bạn', index: 0 },
    { icon: <PeopleIcon />, text: 'Đang Follow', index: 1 },
    { icon: <PlayCircleIcon />, text: 'LIVE', index: 2 },
  ];

  const displayedAccounts = showMoreSuggested
    ? suggestedAccounts
    : suggestedAccounts.slice(0, 3);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          top: 60, // Header height
          height: 'calc(100% - 60px)',
          border: 'none',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', pt: 2 }}>
        {/* Main Navigation */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.index}
              selected={selectedIndex === item.index}
              onClick={() => setSelectedIndex(item.index)}
              sx={{
                mb: 0.5,
                mx: 1,
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(254, 44, 85, 0.08)',
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main',
                  },
                  '& .MuiListItemText-primary': {
                    color: 'primary.main',
                    fontWeight: 700,
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(22, 24, 35, 0.03)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '16px',
                  fontWeight: selectedIndex === item.index ? 700 : 600,
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Suggested Accounts */}
        <Box sx={{ px: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(22, 24, 35, 0.5)',
              fontWeight: 600,
              mb: 1,
              fontSize: '14px',
            }}
          >
            Tài khoản được đề xuất
          </Typography>

          <List sx={{ p: 0 }}>
            {displayedAccounts.map((account) => (
              <ListItem
                key={account.id}
                button
                sx={{
                  px: 0,
                  py: 1,
                  alignItems: 'flex-start',
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(22, 24, 35, 0.03)',
                  },
                }}
              >
                <Avatar
                  src={account.avatar}
                  sx={{ width: 32, height: 32, mr: 1.5 }}
                />
                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {account.username}
                    </Typography>
                    {account.verified && (
                      <CheckCircleIcon
                        sx={{
                          fontSize: 14,
                          color: '#20D5EC',
                        }}
                      />
                    )}
                  </Stack>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(22, 24, 35, 0.5)',
                      fontSize: '12px',
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {account.name}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>

          <Button
            fullWidth
            size="small"
            onClick={() => setShowMoreSuggested(!showMoreSuggested)}
            sx={{
              textTransform: 'none',
              color: 'primary.main',
              fontSize: '14px',
              fontWeight: 600,
              justifyContent: 'flex-start',
              px: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {showMoreSuggested ? 'Ẩn bớt' : 'Xem thêm'}
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Footer Links */}
        <Box sx={{ px: 2, pb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(22, 24, 35, 0.5)',
              fontSize: '12px',
              display: 'block',
              mb: 1,
              lineHeight: 1.8,
            }}
          >
            Giới thiệu · Bảng tin · Liên hệ · Sự nghiệp
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(22, 24, 35, 0.5)',
              fontSize: '12px',
              display: 'block',
              mb: 1,
              lineHeight: 1.8,
            }}
          >
            ByteDance · TikTok for Good · Quảng cáo
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(22, 24, 35, 0.5)',
              fontSize: '12px',
              display: 'block',
            }}
          >
            © 2025 TikTok Clone
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;