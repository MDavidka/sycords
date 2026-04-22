import React from 'react'


export default function Contact() {
  return (
    <div >
<header className="bg-white shadow-sm border-b">
<div className="container mx-auto px-4 py-6">
<div className="flex justify-between items-center">
<a href="/">
Blooming Bliss
</a>
<nav className="flex gap-6">
Home
Shop
About
</nav>
</div>
</div>
</header>
<main className="py-20">
<div className="container mx-auto px-4">
<div className="text-center mb-20">
Get In Touch
<div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8" />
Questions about your order? Need help choosing the perfect bouquet? We're here to help!
</div>
<div className="grid lg:grid-cols-2 gap-16 mb-24">
<div >
Send us a message
<form className="space-y-6 max-w-lg">
<div >
Name
<input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm transition-all" placeholder="Your name" />
</div>
<div >
Email
<input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm transition-all" placeholder="your@email.com" />
</div>
<div >
Message
<textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm transition-all resize-vertical" placeholder="Tell us about your floral needs..." />
</div>
Send Message
</form>
</div>
<div className="space-y-8">
<div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
<div className="flex items-center gap-4 mb-6">
📞
<div >
Call Us
(555) 123-4567
Mon-Fri 8AM-8PM | Sat-Sun 9AM-6PM
</div>
</div>
</div>
<div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
<div className="flex items-center gap-4 mb-6">
✉️
<div >
Email
hello@bloomingbliss.com
Response within 2 hours
</div>
</div>
</div>
</div>
</div>
</div>
<section className="bg-white/50 py-20">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
Visit Our Stores
Come see our beautiful arrangements in person
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
<div className="text-center group hover:scale-105 transition-transform">
📍
Downtown
123 Flower St
Mon-Sat 9AM-7PM
</div>
<div className="text-center group hover:scale-105 transition-transform">
📍
Uptown
456 Petal Ave
Mon-Fri 10AM-6PM
</div>
<div className="text-center group hover:scale-105 transition-transform">
📍
Online Only
Delivery Nationwide
Same day delivery
</div>
</div>
</div>
</section>
</main>
<footer className="bg-gray-900 text-white py-12 mt-auto border-t">
<div className="container mx-auto px-4 text-center">
© 2024 Blooming Bliss Flowers. All rights reserved.
</div>
</footer>
</div>
  )
}