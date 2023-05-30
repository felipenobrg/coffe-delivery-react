import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
