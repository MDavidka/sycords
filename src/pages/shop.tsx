'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'

interface Props {
  setCategoryFilter: (value: unknown) => void
  setPriceRange: (value: unknown) => void
  clearFilters: () => void
  setSearchQuery: (value: string) => void
  setGridView: (value: unknown) => void
  setListView: (value: unknown) => void
  setSortBy: (value: unknown) => void
  addToCart: () => void
}

export function Shop({ setCategoryFilter, setPriceRange, clearFilters, setSearchQuery, setGridView, setListView, setSortBy, addToCart }: Props) {
  const [categoryFilter, setCategoryFilter] = React.useState(undefined)
  const [priceRange, setPriceRange] = React.useState(undefined)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [sortBy, setSortBy] = React.useState(undefined)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">Our Flower Shop</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Discover beautiful handcrafted bouquets, arrangements, and plants for every occasion. Fresh flowers delivered daily.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-1/4 space-y-4">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
              <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100">Filters</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2 text-slate-700 dark:text-slate-300">Category</h4>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bouquets">Bouquets</SelectItem>
                      <SelectItem value="arrangements">Arrangements</SelectItem>
                      <SelectItem value="plants">Plants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2 text-slate-700 dark:text-slate-300">Price</h4>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={10} />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$0</span>
                    <span>$200</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>Clear Filters</Button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Input placeholder="Search flowers..." value={searchQuery} onChange={setSearchQuery} className="pl-12 pr-4 py-3" />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={setGridView}>Grid</Button>
                <Button variant="outline" size="sm" onClick={setListView}>List</Button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-slate-600 dark:text-slate-400">Showing 1-12 of 48 products</div>
              <div className="flex items-center gap-2 text-sm">
                <span>Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <span className="text-5xl group-hover:rotate-6 transition-transform">🌸</span>
                  </div>
                </div>
                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 line-clamp-1">Pink Rose Bouquet</h3>
                    <Badge variant="secondary">New</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">12 premium pink roses with eucalyptus and baby's breath. Perfect for anniversaries.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-rose-600">$59</div>
                    <Button size="sm" onClick={addToCart} className="group hover:bg-rose-600">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <span className="text-5xl group-hover:rotate-6 transition-transform">🌺</span>
                  </div>
                </div>
                <CardContent className="p-6 pt-0">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 line-clamp-1">Hibiscus Arrangement</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">Exotic tropical flowers in a modern ceramic vase.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-rose-600">$89</div>
                    <Button size="sm" onClick={addToCart} className="group hover:bg-rose-600">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <span className="text-5xl group-hover:rotate-6 transition-transform">🪴</span>
                  </div>
                </div>
                <CardContent className="p-6 pt-0">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 line-clamp-1">Fiddle Leaf Fig</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">Large 4ft plant in decorative pot. Perfect for home decor.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-rose-600">$129</div>
                    <Button size="sm" onClick={addToCart} className="group hover:bg-rose-600">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-8">Load More Products</Button>
          </div>
        </div>
      </div>
    </div>
  )
}