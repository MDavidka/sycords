import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FlowerShop-FreshFlowersDelivered from './pages/index'
import AllFlowers-FlowerShop from './pages/products'
import FlowerCollection from './pages/collections/:category'
import ProductName-FlowerShop from './pages/products/:id'
import YourCart-FlowerShop from './pages/cart'
import Checkout-FlowerShop from './pages/checkout'
import AboutOurFlowerShop from './pages/about'
import ContactFlowerShop from './pages/contact'
import DeliveryInformation-FlowerShop from './pages/delivery'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<FlowerShop-FreshFlowersDelivered />} />
      <Route path="/products" element={<AllFlowers-FlowerShop />} />
      <Route path="/collections/:category" element={<FlowerCollection />} />
      <Route path="/products/:id" element={<ProductName-FlowerShop />} />
      <Route path="/cart" element={<YourCart-FlowerShop />} />
      <Route path="/checkout" element={<Checkout-FlowerShop />} />
      <Route path="/about" element={<AboutOurFlowerShop />} />
      <Route path="/contact" element={<ContactFlowerShop />} />
      <Route path="/delivery" element={<DeliveryInformation-FlowerShop />} />
      </Routes>
    </BrowserRouter>
  )
}