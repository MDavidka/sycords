'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function About() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">Blossoming with passion since 2012, we bring nature's finest to your doorstep.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">From Farm to Vase</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">We partner directly with sustainable family farms across Ecuador, Colombia, and Kenya. Every stem is hand-picked at dawn and arrives within 48 hours, ensuring unmatched freshness.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-2xl">🌱</span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">Sustainable</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-2xl">✈️</span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">48hr Delivery</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-rose-400/20 to-pink-400/20 backdrop-blur-sm rounded-3xl p-12">
              <div className="text-7xl mx-auto">🌸</div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-3">Meet Our Florists</h2>
          <p className="text-lg text-center text-slate-600 dark:text-slate-300 mb-20">Artisans with over 50 years of combined experience</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl block pt-6">👩‍🎨</span>
              </div>
              <CardTitle className="text-2xl text-center">Elena</CardTitle>
              <p className="text-slate-500 dark:text-slate-400 text-center text-sm">Lead Designer</p>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-slate-600 dark:text-slate-300 text-center">20+ years creating unforgettable arrangements for life's most precious moments.</p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl block pt-6">🌿</span>
              </div>
              <CardTitle className="text-2xl text-center">Marcus</CardTitle>
              <p className="text-slate-500 dark:text-slate-400 text-center text-sm">Sourcing Expert</p>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-slate-600 dark:text-slate-300 text-center">Travels the world to bring you the rarest, most vibrant blooms.</p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl block pt-6">💐</span>
              </div>
              <CardTitle className="text-2xl text-center">Sofia</CardTitle>
              <p className="text-slate-500 dark:text-slate-400 text-center text-sm">Studio Manager</p>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-slate-600 dark:text-slate-300 text-center">Ensures every bouquet is a masterpiece before it leaves our studio.</p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-emerald-900/20 dark:to-emerald-800/20 border-2 border-emerald-200 dark:border-emerald-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Our Promise</CardTitle>
          </CardHeader>
          <CardContent className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Freshness Guaranteed</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">7-day vase life or we remake it free</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Carbon Neutral</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">We offset 200% of our shipping emissions</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}