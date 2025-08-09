import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  
import './css/main.css'
import App from './routes.tsx'
import Layout from './components/layouts/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Main Application */}
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)
