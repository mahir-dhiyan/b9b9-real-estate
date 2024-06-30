import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './pages/routes/Routes.jsx'
import Authproviders from './providers/Authproviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <RouterProvider router={router} />

    </Authproviders>

  </React.StrictMode>,
)
