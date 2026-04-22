import React from 'react'


export default function Home() {
  return (
    <div >
<header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
<div className="container mx-auto px-4 py-6 flex justify-between items-center">
🌸 Blooming Bliss Flowers
<nav className="flex gap-4">
Shop
About
Contact
</nav>
</div>
</header>
<section className="flex-1 flex items-center py-20 bg-gradient-to-b from-white to-pink-50">
<div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
<div >
Fresh Flowers Delivered
Hand-picked bouquets for every occasion. Same-day delivery in your area.
<div className="flex flex-col sm:flex-row gap-4">
Shop Now
View Collection
</div>
</div>
<div className="relative">
<div className="w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl mx-auto shadow-2xl" />
</div>
</div>
</section>
<section id="featured" className="py-20 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
Featured Bouquets
Our best-selling arrangements, perfect for any occasion
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="w-full h-80 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl mb-6 group-hover:scale-105 transition-transform overflow-hidden">
🌹
</div>
Classic Rose
$49
Add to Cart
</div>
<div className="group cursor-pointer">
<div className="w-full h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-6 group-hover:scale-105 transition-transform overflow-hidden">
🌺
</div>
Tropical Paradise
$59
Add to Cart
</div>
<div className="group cursor-pointer">
<div className="w-full h-80 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl mb-6 group-hover:scale-105 transition-transform overflow-hidden">
🌻
</div>
Sunflower Delight
$39
Add to Cart
</div>
</div>
</div>
</section>
<section className="py-20 bg-gradient-to-t from-pink-500 to-purple-500 text-white">
<div className="container mx-auto px-4 text-center">
Ready to Brighten Someone's Day?
Order now and get same-day delivery. Fresh flowers guaranteed.
Shop All Flowers
</div>
</section>
<footer className="bg-gray-900 text-white py-12 mt-auto">
<div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
<div >
🌸 Blooming Bliss
Fresh flowers for every moment
</div>
<div >
Quick Links
<ul className="space-y-2">
<li >
Shop
</li>
<li >
About
</li>
<li >
Contact
</li>
</ul>
</div>
<div >
Services
<ul className="space-y-2">
<li >
✓ Same Day Delivery
</li>
<li >
✓ Subscription Plans
</li>
<li >
✓ Corporate Orders
</li>
</ul>
</div>
<div >
Contact
📞 (555) 123-4567
✉️ hello@bloomingbliss.com
</div>
</div>
</footer>
</div>
  )
}