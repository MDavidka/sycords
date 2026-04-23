import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/index'
import { Shop } from './pages/shop'
import { About } from './pages/about'
import { Contact } from './pages/contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
