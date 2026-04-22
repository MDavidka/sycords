import React from 'react'


export default function About() {
  return (
    <div >
<header className="bg-white/80 backdrop-blur-md shadow-sm border-b">
<div className="container mx-auto px-4 py-6">
<div className="flex justify-between items-center">
<a href="/">
Blooming Bliss
</a>
<nav className="flex gap-6">
Home
Shop
Contact
</nav>
</div>
</div>
</header>
<main className="flex-1 py-20">
<section className="container mx-auto px-4 mb-24">
<div className="text-center mb-16">
Our Story
<div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8" />
Founded in 2015 by floral designer Sarah Bloom, our family-owned business has been bringing joy through fresh flowers for nearly a decade. We source only the finest blooms from local farms and artisan growers.
</div>
</section>
<section className="py-24 bg-white/50 backdrop-blur-sm">
<div className="container mx-auto px-4">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div >
Why Choose Us?
<div className="space-y-6">
<div className="flex items-start gap-4">
1
<div >
Farm Fresh Daily
We work directly with local flower farms to ensure every bouquet contains only the freshest blooms available that day.
</div>
</div>
<div className="flex items-start gap-4">
2
<div >
Expert Designers
Our team of certified floral designers creates arrangements that are both beautiful and meaningful.
</div>
</div>
<div className="flex items-start gap-4">
3
<div >
Fast Delivery
Same-day delivery within 3 hours. We guarantee your flowers arrive fresh and on time.
</div>
</div>
</div>
</div>
<div className="relative">
<div className="w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl mx-auto shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-400/20 via-transparent to-transparent" />
<div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
</div>
</div>
</div>
</div>
</section>
<section className="container mx-auto px-4 py-24">
<div className="text-center mb-16">
Meet Our Team
The passionate florists behind every perfect bouquet
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center group">
🌸
Sarah Bloom
Founder & Lead Designer
20+ years experience creating unforgettable floral arrangements
</div>
<div className="text-center group">
🌺
Michael Green
Farm Liaison
Sources the freshest flowers from local sustainable farms
</div>
<div className="text-center group">
🌿
Emma Leaf
Delivery Lead
Ensures every order arrives fresh and on time
</div>
</div>
</section>
</main>
<footer className="bg-gray-900 text-white py-12 mt-auto border-t">
<div className="container mx-auto px-4 text-center">
© 2024 Blooming Bliss Flowers. Bringing beauty to every moment.
</div>
</footer>
</div>
  )
}