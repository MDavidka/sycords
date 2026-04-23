'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Blossom Haven</h1>
        <nav className="flex space-x-6">
          <a href="/shop" className="text-lg font-medium hover:text-rose-600 transition-colors">Shop</a>
          <a href="/about" className="text-lg font-medium hover:text-rose-600 transition-colors">About</a>
          <a href="/contact" className="text-lg font-medium hover:text-rose-600 transition-colors">Contact</a>
        </nav>
      </header>
      <main className="container mx-auto px-6 pb-16">
        <section className="text-center py-24">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">Fresh Blooms Delivered</h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">Discover handcrafted flower arrangements for every occasion. Same-day delivery in your area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/shop" className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">Shop Collection</a>
            <Button variant="outline" size="lg" className="border-rose-200 hover:bg-rose-50 text-rose-700 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300">View Promotions</Button>
          </div>
        </section>
        <section className="py-24">
          <h3 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Featured Arrangements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
              <div className="h-64 bg-gradient-to-br from-rose-100 to-pink-200 group-hover:scale-105 transition-transform duration-500 flex items-end p-6" />
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Eternal Rose</h4>
                <p className="text-gray-600 mb-6">Luxurious long-lasting roses in premium presentation box</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-rose-600">$89</span>
                  <Button size="sm" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all group-hover:scale-110">Shop Now</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-indigo-200 group-hover:scale-105 transition-transform duration-500 flex items-end p-6" />
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Sunflower Symphony</h4>
                <p className="text-gray-600 mb-6">Vibrant sunflowers with seasonal greens</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-rose-600">$59</span>
                  <Button size="sm" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all group-hover:scale-110">Shop Now</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
              <div className="h-64 bg-gradient-to-br from-emerald-100 to-teal-200 group-hover:scale-105 transition-transform duration-500 flex items-end p-6" />
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Spring Meadow</h4>
                <p className="text-gray-600 mb-6">Delicate wildflowers in soft pastel tones</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-rose-600">$79</span>
                  <Button size="sm" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all group-hover:scale-110">Shop Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-3xl shadow-2xl -mx-6 px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              <span className="font-semibold uppercase tracking-wide">Limited Time</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">🌸 Spring Sale</h3>
            <p className="text-2xl md:text-3xl mb-12 opacity-90 leading-relaxed">20% OFF All Bouquets + Free Delivery</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-white/90 font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto">Shop Sale Now</Button>
              <span className="text-2xl font-bold opacity-90">Ends Sunday</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-24 pt-12">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Blossom Haven. Fresh flowers delivered with love.</p>
        </div>
      </footer>
    </div>
  )
}