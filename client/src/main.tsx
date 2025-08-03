import { createRoot } from 'react-dom/client'
import './css/main.css'
import App from './App.tsx'
import Layout from './components/layouts/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <Layout>
    <App />
  </Layout>
)
