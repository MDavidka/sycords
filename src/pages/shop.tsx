import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { addToCart } from '@/lib/shop-logic'

export function Shop() {
  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Shop</h1>
          <p className="text-xl text-muted-foreground">Discover our collection of beautiful plants for your home and garden.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="lg:w-64 space-y-4">
            <div className="p-4 bg-card rounded-lg border">
              <h3 className="font-semibold mb-4">Filters</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium mb-2 text-sm">Categories</h4>
                  <div className="space-y-1">
                    <Button variant="ghost" size="sm" className="justify-start h-8">Indoor</Button>
                    <Button variant="ghost" size="sm" className="justify-start h-8">Outdoor</Button>
                    <Button variant="ghost" size="sm" className="justify-start h-8">Low Light</Button>
                    <Button variant="ghost" size="sm" className="justify-start h-8">Succulents</Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm">Price Range</h4>
                  <div className="space-y-1">
                    <Button variant="ghost" size="sm" className="justify-start h-8">Under $20</Button>
                    <Button variant="ghost" size="sm" className="justify-start h-8">$20 - $50</Button>
                    <Button variant="ghost" size="sm" className="justify-start h-8">$50+</Button>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">Clear Filters</Button>
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 md:w-80">
              <Input placeholder="Search plants..." value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div>
              <div className="w-[180px]">
                <div placeholder="Sort by" />
              </div>
              <div>
                <div value="price-low">Price: Low to High</div>
                <div value="price-high">Price: High to Low</div>
                <div value="popularity">Popularity</div>
                <div value="newest">Newest</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card className="group hover:shadow-xl transition-all overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-200 group-hover:scale-105 transition-transform p-6 flex items-center justify-center">
              <div className="text-4xl">🌿</div>
            </div>
            <CardContent className="p-6 pt-0">
              <h3 className="font-semibold text-lg mb-1">Monstera Deliciosa</h3>
              <p className="text-sm text-muted-foreground mb-4">Indoor · Low Light</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">$29</div>
                <Badge variant="secondary">In Stock</Badge>
              </div>
              <Button className="w-full" onClick={addToCart}>Add to Cart</Button>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-200 group-hover:scale-105 transition-transform p-6 flex items-center justify-center">
              <div className="text-4xl">🪴</div>
            </div>
            <CardContent className="p-6 pt-0">
              <h3 className="font-semibold text-lg mb-1">Snake Plant</h3>
              <p className="text-sm text-muted-foreground mb-4">Indoor · Very Low Light</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">$19</div>
                <Badge variant="secondary">In Stock</Badge>
              </div>
              <Button className="w-full" onClick={addToCart}>Add to Cart</Button>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-200 group-hover:scale-105 transition-transform p-6 flex items-center justify-center">
              <div className="text-4xl">🌸</div>
            </div>
            <CardContent className="p-6 pt-0">
              <h3 className="font-semibold text-lg mb-1">Peace Lily</h3>
              <p className="text-sm text-muted-foreground mb-4">Indoor · Medium Light</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">$25</div>
                <Badge variant="secondary">In Stock</Badge>
              </div>
              <Button className="w-full" onClick={addToCart}>Add to Cart</Button>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-yellow-100 to-amber-200 group-hover:scale-105 transition-transform p-6 flex items-center justify-center">
              <div className="text-4xl">🍀</div>
            </div>
            <CardContent className="p-6 pt-0">
              <h3 className="font-semibold text-lg mb-1">Pothos</h3>
              <p className="text-sm text-muted-foreground mb-4">Indoor · Low Light</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">$15</div>
                <Badge variant="secondary">In Stock</Badge>
              </div>
              <Button className="w-full" onClick={addToCart}>Add to Cart</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
