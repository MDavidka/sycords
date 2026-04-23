'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function Shop() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">Our Flower Shop</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Discover beautiful handcrafted flower arrangements for every occasion. Fresh flowers delivered daily.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-64 space-y-4">
            <div className="p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl">
              <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200">Filters</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2 text-slate-700 dark:text-slate-300">Categories</h4>
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" className="justify-start w-full h-10 px-2">Roses</Button>
                    <Button variant="ghost" size="sm" className="justify-start w-full h-10 px-2">Lilies</Button>
                    <Button variant="ghost" size="sm" className="justify-start w-full h-10 px-2">Mixed Bouquets</Button>
                    <Button variant="ghost" size="sm" className="justify-start w-full h-10 px-2">All</Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2 text-slate-700 dark:text-slate-300">Sort By</h4>
                  <select className="w-full h-10 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-xl">
              <div className="flex-1 relative">
                <Input placeholder="Search flower types..." className="pl-12 pr-4 h-12 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-white/50 shadow-lg focus:ring-2 focus:ring-rose-500" />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none">🔍</svg>
              </div>
              <Button size="sm" className="h-12 px-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-xl">Clear Filters</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/60 shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-pink-100 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <img src="/api/placeholder/400/300" alt="Red Roses Bouquet" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 line-clamp-1">Red Roses Bouquet</h3>
                    <Badge variant="secondary">Roses</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">12 premium red roses with eucalyptus and baby’s breath. Perfect for romantic occasions.</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-rose-600">$59.99</div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">−</Button>
                      <span className="w-8 text-center font-mono text-sm">1</span>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">+</Button>
                    </div>
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-xl font-semibold">Add to Cart</Button>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/60 shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-white to-lime-100 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <img src="/api/placeholder/400/300" alt="White Lilies" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 line-clamp-1">White Lilies</h3>
                    <Badge variant="secondary">Lilies</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">Elegant white lilies symbolizing purity. Ideal for sympathy or new beginnings.</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-emerald-600">$79.99</div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">−</Button>
                      <span className="w-8 text-center font-mono text-sm">1</span>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">+</Button>
                    </div>
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-xl font-semibold">Add to Cart</Button>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/60 shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <img src="/api/placeholder/400/300" alt="Mixed Spring Bouquet" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 line-clamp-1">Spring Mixed Bouquet</h3>
                    <Badge variant="secondary">Mixed</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">Vibrant mix of tulips, daffodils and ranunculus. Perfect for spring celebrations.</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-indigo-600">$49.99</div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">−</Button>
                      <span className="w-8 text-center font-mono text-sm">1</span>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">+</Button>
                    </div>
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-xl font-semibold">Add to Cart</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}