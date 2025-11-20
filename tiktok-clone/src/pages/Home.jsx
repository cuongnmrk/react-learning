import React from 'react'
import VideoCard from '../components/video/VideoCard'
import { Box } from '@mui/material'


const demoVideos = [
{ id: '1', user: 'alice', description: 'A sample video 1', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
{ id: '2', user: 'bob', description: 'A sample video 2', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
{ id: '3', user: 'carol', description: 'A sample video 3', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
]


export default function Home(){
return (
<Box className="feed-scroll">
{demoVideos.map(v => <VideoCard key={v.id} video={v} />)}
</Box>
)
}