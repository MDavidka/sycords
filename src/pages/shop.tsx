import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowPathIcon, ChevronLeftIcon, ChevronRightIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { togglePriceUnder50, togglePrice50to100, togglePriceOver100, toggleFilterRoses, toggleFilterTulips, toggleFilterLilies, clearFilters, addToCart } from '@/lib/shop-logic'

export function Shop() {
  const [occasionFilter, setOccasionFilter] = React.useState('')
  const [priceUnder50, setPriceUnder50] = React.useState(0)
  const [price50to100, setPrice50to100] = React.useState(0)
  const [priceOver100, setPriceOver100] = React.useState(0)
  const [filterRoses, setFilterRoses] = React.useState('')
  const [filterTulips, setFilterTulips] = React.useState('')
  const [filterLilies, setFilterLilies] = React.useState('')
  const [sort, setSort] = React.useState('')
  const [view, setView] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="w-full lg:w-64 flex-shrink-0">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">Occasion</h3>
              <Select value={occasionFilter} onValueChange={setOccasionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All occasions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All occasions</SelectItem>
                  <SelectItem value="wedding">Weddings</SelectItem>
                  <SelectItem value="birthday">Birthdays</SelectItem>
                  <SelectItem value="sympathy">Sympathy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="under-50" checked={priceUnder50} onCheckedChange={togglePriceUnder50} />
                  <Label htmlFor="under-50">Under $50</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="50-100" checked={price50to100} onCheckedChange={togglePrice50to100} />
                  <Label htmlFor="50-100">$50 - $100</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="over-100" checked={priceOver100} onCheckedChange={togglePriceOver100} />
                  <Label htmlFor="over-100">Over $100</Label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">Flower Type</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="roses" checked={filterRoses} onCheckedChange={toggleFilterRoses} />
                  <Label htmlFor="roses">Roses</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="tulips" checked={filterTulips} onCheckedChange={toggleFilterTulips} />
                  <Label htmlFor="tulips">Tulips</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="lilies" checked={filterLilies} onCheckedChange={toggleFilterLilies} />
                  <Label htmlFor="lilies">Lilies</Label>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
              <ArrowPathIcon className="h-4 w-4 mr-2" />
              <span>Clear Filters</span>
            </Button>
          </CardContent>
        </Card>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl lg:text-3xl font-bold">Flower Shop</h2>
              <Badge variant="secondary">(24)</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Select value={view} onValueChange={setView}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Grid" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grid">Grid</SelectItem>
                  <SelectItem value="list">List</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img src="/placeholder-flower.jpg" alt="Rose Bouquet" className="w-24 h-24 object-cover opacity-50 group-hover:opacity-100" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-1">Classic Red Roses</h3>
                  <Badge variant="outline">Wedding</Badge>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">$89</p>
                    <p className="text-sm text-muted-foreground">12 stems</p>
                  </div>
                  <Button size="sm" onClick={addToCart}>
                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img src="/placeholder-flower.jpg" alt="Pink Tulips" className="w-24 h-24 object-cover opacity-50 group-hover:opacity-100" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-1">Spring Tulip Mix</h3>
                  <Badge variant="outline">Birthday</Badge>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">$65</p>
                    <p className="text-sm text-muted-foreground">15 stems</p>
                  </div>
                  <Button size="sm" onClick={addToCart}>
                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img src="/placeholder-flower.jpg" alt="White Lilies" className="w-24 h-24 object-cover opacity-50 group-hover:opacity-100" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-1">Peace Lily Arrangement</h3>
                  <Badge variant="outline">Sympathy</Badge>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">$120</p>
                    <p className="text-sm text-muted-foreground">10 stems</p>
                  </div>
                  <Button size="sm" onClick={addToCart}>
                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img src="/placeholder-flower.jpg" alt="Mixed Bouquet" className="w-24 h-24 object-cover opacity-50 group-hover:opacity-100" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-1">Rainbow Mixed Bouquet</h3>
                  <Badge variant="outline">Birthday</Badge>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">$45</p>
                    <p className="text-sm text-muted-foreground">8 stems</p>
                  </div>
                  <Button size="sm" onClick={addToCart}>
                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">Showing 1-4 of 24 products</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">
                <span>...</span>
              </Button>
              <Button variant="outline" size="sm">6</Button>
              <Button variant="outline" size="sm">
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
