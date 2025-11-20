import React from 'react'
import { AppBar, Toolbar, Box, InputBase, IconButton, Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import MessageIcon from '@mui/icons-material/Message'


export default function Header(){
return (
<AppBar position="fixed" color="inherit" sx={{ boxShadow: 'none', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
<Toolbar>
<Box sx={{ flex: 1 }}>
<strong>TikTok Clone</strong>
</Box>


<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(0,0,0,0.05)', px: 1, borderRadius: 1 }}>
<SearchIcon />
<InputBase placeholder="Search" sx={{ ml: 1 }} />
</Box>


<IconButton>
<UploadFileIcon />
</IconButton>


<IconButton>
<MessageIcon />
</IconButton>


<Avatar />
</Box>
</Toolbar>
</AppBar>
)
}