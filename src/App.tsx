import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcometoPlantParadise from './pages/index'
import PlantShop from './pages/shop'
import IndoorPlantsCollection from './pages/shop/indoor'
import OutdoorPlantsCollection from './pages/shop/outdoor'
import PlantProductPage from './pages/product/:id'
import YourCart from './pages/cart'
import Checkout from './pages/checkout'
import PlantCareGuides from './pages/care'
import IndoorPlantCareGuide from './pages/care/indoor'
import AboutPlantParadise from './pages/about'
import ContactUs from './pages/contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<WelcometoPlantParadise />} />
      <Route path="/shop" element={<PlantShop />} />
      <Route path="/shop/indoor" element={<IndoorPlantsCollection />} />
      <Route path="/shop/outdoor" element={<OutdoorPlantsCollection />} />
      <Route path="/product/:id" element={<PlantProductPage />} />
      <Route path="/cart" element={<YourCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/care" element={<PlantCareGuides />} />
      <Route path="/care/indoor" element={<IndoorPlantCareGuide />} />
      <Route path="/about" element={<AboutPlantParadise />} />
      <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}