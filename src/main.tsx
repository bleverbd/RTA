import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { routes } from './routes/Route'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
       <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>,
)