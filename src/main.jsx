import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route'
import ProviderContext from './ProviderContext'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={router}></RouterProvider>
    </ProviderContext>
  </React.StrictMode>,
)
