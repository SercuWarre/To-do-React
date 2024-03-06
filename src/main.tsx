import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'
import './assets/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* ReactDOM.createRoot(document.getElementById('root')
    <RouterProvider router={router} />) */}
  </React.StrictMode>,
)
