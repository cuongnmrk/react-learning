import React from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<CssBaseline />
<App />
</BrowserRouter>
</React.StrictMode>
)