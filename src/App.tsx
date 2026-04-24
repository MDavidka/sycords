import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { Home } from './pages/index'
import { HostingPlans } from './pages/hosting'
import { Domains } from './pages/domains'
import { AboutUs } from './pages/about'
import { ContactSupport } from './pages/contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting" element={<HostingPlans />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactSupport />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
