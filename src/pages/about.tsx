'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function About() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">From a small family garden to your doorstep – bringing joy through fresh, sustainable flowers since 2012.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">We believe flowers should do more than decorate – they should tell stories, spark emotions, and connect people. That's why we source only the freshest blooms from local farms and sustainable growers, delivering nature's beauty straight to your moments that matter.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/90 text-sm">Local Flowers</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">24h</h3>
              <p className="text-white/90 text-sm">Fresh Guarantee</p>
            </div>
          </div>
        </div>
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Meet Our Florists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <div className="h-64 bg-gradient-to-br from-rose-400 to-pink-500 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611614230333-f1e7c71b9cbe?w=400')] bg-cover bg-center opacity-20" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Emma Chen</h3>
                <p className="text-slate-600 mb-4">Lead Florist</p>
                <p className="text-sm text-slate-500 leading-relaxed">15+ years creating wedding masterpieces and custom arrangements that capture your story.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <div className="h-64 bg-gradient-to-br from-emerald-400 to-teal-500 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590141222329-8e9981de6091?w=400')] bg-cover bg-center opacity-20" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Marcus Lee</h3>
                <p className="text-slate-600 mb-4">Sustainability Expert</p>
                <p className="text-sm text-slate-500 leading-relaxed">Passionate about eco-friendly practices and zero-waste floral design.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-violet-500 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587201?w=400')] bg-cover bg-center opacity-20" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Sofia Rivera</h3>
                <p className="text-slate-600 mb-4">Corporate Events</p>
                <p className="text-sm text-slate-500 leading-relaxed">Specializes in large-scale events and subscription flower programs.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-rose-400 to-pink-500" />
            <div className="space-y-12">
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-rose-600 dark:text-rose-400 shadow-lg border-4 border-white dark:border-slate-800 z-10">2012</div>
                <div className="flex-1 pr-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Garden Beginnings</h3>
                  <p className="text-slate-600 dark:text-slate-300">Started as a backyard flower stand with just 3 flower varieties.</p>
                </div>
              </div>
              <div className="flex items-center space-x-8 flex-row-reverse">
                <div className="flex-1 pl-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Brick & Mortar</h3>
                  <p className="text-slate-600 dark:text-slate-300">Opened first storefront in the heart of the city.</p>
                </div>
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-emerald-600 dark:text-emerald-400 shadow-lg border-4 border-white dark:border-slate-800 z-10">2017</div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-purple-600 dark:text-purple-400 shadow-lg border-4 border-white dark:border-slate-800 z-10">2023</div>
                <div className="flex-1 pr-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Online Expansion</h3>
                  <p className="text-slate-600 dark:text-slate-300">Launched nationwide delivery with same-day service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Sustainability Practices</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">🌱</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Local Sourcing</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg">95% of our flowers come from farms within 100 miles, reducing carbon footprint.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">♻️</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Zero Waste</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg">All stems and greenery are composted or donated to local artisans.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">☀️</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Eco Packaging</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg">100% recyclable, compostable packaging – no plastic ever.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Loved by Thousands</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-md mx-auto">Don't just take our word for it</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Card className="border-0 bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
                <CardContent className="p-12">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl font-semibold text-white shadow-lg">★</div>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white leading-relaxed mb-2">“The most beautiful, freshest flowers I've ever received. Delivered same day and lasted 2 weeks!”</p>
                      <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <div className="w-10 h-10 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-center text-white font-semibold">SL</div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">Sarah Lopez</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Wedding Client</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">4.9/5</div>
          </div>
        </section>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="lg" className="group bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-lg px-12 py-8 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">Shop Fresh Flowers</Button>
          <Button variant="outline" size="lg" className="text-lg px-12 py-8 font-semibold border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 transition-all duration-300">Back to Home</Button>
        </div>
      </div>
    </div>
  )
}