import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'

export function Shop() {
  const [search, setSearch] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [priceRange, setPriceRange] = React.useState(0)
  const [sort, setSort] = React.useState('')

  return (
    <Card className="max-w-7xl mx-auto p-6">
      <CardHeader>
        <CardTitle>Shop</CardTitle>
        <CardDescription>Discover our full catalog of flower arrangements, bouquets, and plants</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="w-full lg:w-64 space-y-4">
            <div>
              <Label>Search products</Label>
              <Input placeholder="Search by name..." value={search} onChange={setSearch} />
            </div>
            <div>
              <Label>Categories</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="roses">Roses</SelectItem>
                  <SelectItem value="lilies">Lilies</SelectItem>
                  <SelectItem value="mixed">Mixed Bouquets</SelectItem>
                  <SelectItem value="plants">Plants</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Price Range</Label>
              <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={10} />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>$0</span>
                <span>$200</span>
              </div>
            </div>
            <div>
              <Label>Sort by</Label>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-4 pt-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                      <span className="text-4xl">🌹</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Classic Red Roses</h3>
                  <p className="text-muted-foreground mb-4">12 premium red roses with greenery</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-foreground">$49.99</span>
                    <Badge variant="secondary">In Stock</Badge>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 pt-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-white to-yellow-200 flex items-center justify-center">
                      <span className="text-4xl">🌺</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Pink Lily Bouquet</h3>
                  <p className="text-muted-foreground mb-4">Elegant lilies with baby's breath</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-foreground">$59.99</span>
                    <Badge variant="secondary">In Stock</Badge>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 pt-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                      <span className="text-4xl">🌸</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mixed Spring Flowers</h3>
                  <p className="text-muted-foreground mb-4">Tulips, daffodils and more</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-foreground">$39.99</span>
                    <Badge variant="secondary">In Stock</Badge>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 pt-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <span className="text-4xl">🌿</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fiddle Leaf Fig</h3>
                  <p className="text-muted-foreground mb-4">Large indoor plant</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-foreground">$79.99</span>
                    <Badge variant="secondary">In Stock</Badge>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 pt-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                      <span className="text-4xl">🌻</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sunflower Delight</h3>
                  <p className="text-muted-foreground mb-4">Bright sunflowers bouquet</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-foreground">$44.99</span>
                    <Badge variant="secondary">In Stock</Badge>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
