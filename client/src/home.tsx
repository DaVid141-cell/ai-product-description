import { createRoot } from 'react-dom/client'
import './css/main.css'
import HomeLayout from './components/layouts/home-layout.tsx'
import Hero from './components/hero.tsx'

createRoot(document.getElementById('root')!).render(
  <HomeLayout>
    <Hero/>
  </HomeLayout>
)