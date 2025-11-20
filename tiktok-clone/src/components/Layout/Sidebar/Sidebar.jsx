import React from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Avatar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { Link as RouterLink } from 'react-router-dom'


const width = 260


export default function Sidebar(){
return (
<Drawer variant="permanent" open sx={{ '& .MuiDrawer-paper': { width, boxSizing: 'border-box', pt: 2 } }}>
<Box sx={{ px: 2, mb: 2 }}>
<Typography variant="h6">TikTok Clone</Typography>
</Box>


<List>
<ListItemButton component={RouterLink} to="/">
<ListItemIcon><HomeIcon /></ListItemIcon>
<ListItemText primary="For You" />
</ListItemButton>


<ListItemButton component={RouterLink} to="/following">
<ListItemIcon><PeopleIcon /></ListItemIcon>
<ListItemText primary="Following" />
</ListItemButton>


<ListItemButton>
<ListItemIcon><LiveTvIcon /></ListItemIcon>
<ListItemText primary="Live" />
</ListItemButton>
</List>


<Box sx={{ px: 2, mt: 4 }}>
<Typography variant="subtitle2">Suggested accounts</Typography>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
<Avatar />
<Box>
<Typography variant="body2">demo_user</Typography>
<Typography variant="caption">@demo</Typography>
</Box>
</Box>
</Box>


</Drawer>
)
}