import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'


export default function VideoDetail(){
const { id } = useParams()
return (
<Box>
<Typography variant="h5">Video detail — {id}</Typography>
<Typography sx={{ mt: 2 }}>Show a large video player + side actions here.</Typography>
</Box>
)
}