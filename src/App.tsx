import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { Home } from './pages/index'
import { Webhosting } from './pages/hosting'
import { Vpsservers } from './pages/vps'
import { About } from './pages/about'
import { Contact } from './pages/contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting" element={<Webhosting />} />
        <Route path="/vps" element={<Vpsservers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
