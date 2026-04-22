import React from 'react'


export default function Shop() {
  return (
    <div >
<header className="bg-white shadow-sm border-b">
<div className="container mx-auto px-4 py-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div >
Our Collection
Find the perfect bouquet for any occasion
</div>
<div className="flex gap-3">
<select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" defaultValue="price-low-high">
Price: Low to High
Price: High to Low
Name: A-Z
Name: Z-A
</select>
<button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
Cart
3
</button>
</div>
</div>
</div>
</header>
<div className="container mx-auto px-4 py-12">
<div className="grid lg:grid-cols-4 gap-8">
<aside className="lg:col-span-1 space-y-6">
<div className="bg-white p-6 rounded-2xl shadow-sm border">
Filter by Type
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer">
<input type="checkbox" className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
Roses
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input type="checkbox" className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
Tulips
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input type="checkbox" className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
Lilies
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input type="checkbox" className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
Mixed Bouquets
</label>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border">
Price Range
<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
$20 - $50
$50 - $100
$100+
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full w-3/4" />
</div>
</div>
</div>
</aside>
<div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group cursor-pointer">
<div className="h-64 bg-gradient-to-br from-pink-100 via-white to-purple-100 group-hover:scale-105 transition-transform p-8 flex items-center justify-center">
🌹
</div>
<div className="p-6">
Red Rose Bouquet
12 premium red roses with greenery
<div className="flex items-center justify-between mb-4">
$59
<div className="flex items-center gap-1 text-sm text-green-600">
⭐
4.9 (127)
</div>
</div>
Add to Cart
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group cursor-pointer">
<div className="h-64 bg-gradient-to-br from-purple-100 via-white to-blue-100 group-hover:scale-105 transition-transform p-8 flex items-center justify-center">
🌺
</div>
<div className="p-6">
Pink Orchid Mix
Exotic orchids and tropical flowers
<div className="flex items-center justify-between mb-4">
$79
<div className="flex items-center gap-1 text-sm text-green-600">
⭐
4.8 (89)
</div>
</div>
Add to Cart
</div>
</div>
</div>
</div>
</div>
</div>
  )
}