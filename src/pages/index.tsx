'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <header className="px-4 py-6 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Blossom Haven</h1>
          <nav className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Shop</Button>
            <Button size="sm">Catalog</Button>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">Fresh Blooms Delivered</h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">Handcrafted flower arrangements for every occasion. Seasonal collections and same-day delivery.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8">Shop Now</Button>
            <Button variant="outline" size="lg" className="px-8">View Catalog</Button>
          </div>
        </section>
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-8 bg-gradient-to-b from-rose-400 to-pink-500 rounded-full" />
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Featured Arrangements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-rose-100 to-pink-200 dark:from-slate-800 dark:to-slate-700 group-hover:scale-105 transition-transform duration-300 flex items-end p-6" />
              <CardContent className="p-6 pt-0">
                <h4 className="font-semibold text-lg mb-1 text-slate-900 dark:text-slate-100">Eternal Rose</h4>
                <p className="text-sm text-slate-500 mb-4">$89</p>
                <Button variant="outline" size="sm" className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-slate-800 dark:to-slate-700 group-hover:scale-105 transition-transform duration-300 flex items-end p-6" />
              <CardContent className="p-6 pt-0">
                <h4 className="font-semibold text-lg mb-1 text-slate-900 dark:text-slate-100">Sunflower Burst</h4>
                <p className="text-sm text-slate-500 mb-4">$65</p>
                <Button variant="outline" size="sm" className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-slate-800 dark:to-slate-700 group-hover:scale-105 transition-transform duration-300 flex items-end p-6" />
              <CardContent className="p-6 pt-0">
                <h4 className="font-semibold text-lg mb-1 text-slate-900 dark:text-slate-100">Spring Meadow</h4>
                <p className="text-sm text-slate-500 mb-4">$72</p>
                <Button variant="outline" size="sm" className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <Badge variant="secondary">LIMITED TIME</Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">20% Off Seasonal Collection</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">Celebrate spring with our freshest blooms. Limited quantities available.</p>
            <Button size="lg" className="px-8">Shop Collection</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 bg-gradient-to-br from-rose-200 to-pink-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl" />
            <div className="h-48 bg-gradient-to-br from-purple-200 to-indigo-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl" />
            <div className="h-48 bg-gradient-to-br from-emerald-200 to-teal-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl col-span-2" />
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200/50 dark:border-slate-800/50 mt-24">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 text-sm text-slate-600 dark:text-slate-400">
            <div />
            <div className="space-y-2">
              <p>Quick Links</p>
              <p className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-colors">Shop</p>
              <p className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-colors">Catalog</p>
            </div>
            <div className="space-y-2">
              <p>Support</p>
              <p className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-colors">Delivery</p>
              <p className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-colors">Contact</p>
            </div>
            <div className="space-y-2">
              <p>Follow Us</p>
              <div className="flex space-x-4">
                <div className="w-6 h-6 bg-slate-300 rounded-full" />
                <div className="w-6 h-6 bg-slate-300 rounded-full" />
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-xs text-slate-500 dark:text-slate-500">© 2024 Blossom Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}