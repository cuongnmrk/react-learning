import React from 'react'
import { Box } from '@mui/material'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'


export default function MainLayout(){
return (
<Box sx={{ display: 'flex' }}>
<Sidebar />


<Box sx={{ flex: 1 }}>
<Header />
<Box sx={{ mt: '72px', p: 2 }}>
<Outlet />
</Box>
</Box>
</Box>
)
}