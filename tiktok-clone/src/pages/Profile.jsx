import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'


export default function Profile(){
const { username } = useParams()
return (
<Box>
<Typography variant="h5">Profile — {username}</Typography>
<Typography sx={{ mt: 2 }}>Profile content and user videos.</Typography>
</Box>
)
}