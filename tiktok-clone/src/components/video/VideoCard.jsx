import React from 'react'
import { Box, Typography, Avatar, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ShareIcon from '@mui/icons-material/Share'


export default function VideoCard({ video }){
return (
<Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 4 }}>
<Box sx={{ flex: 1 }}>
<video src={video.src} controls loop style={{ width: '100%', borderRadius: 12 }}></video>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
<Avatar />
<Box>
<Typography variant="subtitle2">{video.user}</Typography>
<Typography variant="body2">{video.description}</Typography>
</Box>
</Box>
</Box>


<Box sx={{ width: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
<IconButton aria-label="like"><FavoriteBorderIcon /></IconButton>
<IconButton aria-label="comment"><ChatBubbleOutlineIcon /></IconButton>
<IconButton aria-label="share"><ShareIcon /></IconButton>
</Box>
</Box>
)
}