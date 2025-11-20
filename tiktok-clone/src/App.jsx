import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Following from './pages/Following'
import VideoDetail from './pages/VideoDetail'
import Profile from './pages/Profile'


export default function App() {
return (
<Routes>
<Route path="/" element={<MainLayout />}>
<Route index element={<Home />} />
<Route path="following" element={<Following />} />
<Route path="video/:id" element={<VideoDetail />} />
<Route path="profile/:username" element={<Profile />} />
</Route>
</Routes>
)
}