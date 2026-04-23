import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export function Home() {

  return (
    <main className="container mx-auto px-4 py-8 lg:px-8">
      <section className="mb-16">
        <Carousel opts="[object Object]">
          <CarouselContent>
            <CarouselItem>
              <Card className="w-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-4xl font-bold">Welcome to Bloom Haven</CardTitle>
                  <CardDescription>Discover the freshest flowers for every occasion</CardDescription>
                </CardHeader>
                <CardContent className="pb-0">
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Button size="lg">Shop Now</Button>
                    <Button variant="outline" size="lg">View Catalog</Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <div className="h-96 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center rounded-xl">
                <h2 className="text-3xl font-bold text-white text-center">Featured Spring Collection</h2>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="h-12 w-12" />
          <CarouselNext className="h-12 w-12" />
        </Carousel>
      </section>
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Featured Arrangements</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <span className="text-4xl">🌸</span>
              </div>
              <CardHeader className="p-6">
                <CardTitle>Rose Elegance</CardTitle>
                <p className="text-muted-foreground text-sm">$59.99</p>
              </CardHeader>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                <span className="text-4xl">🌻</span>
              </div>
              <CardHeader className="p-6">
                <CardTitle>Sunflower Burst</CardTitle>
                <p className="text-muted-foreground text-sm">$39.99</p>
              </CardHeader>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <span className="text-4xl">🌺</span>
              </div>
              <CardHeader className="p-6">
                <CardTitle>Orchid Dream</CardTitle>
                <p className="text-muted-foreground text-sm">$79.99</p>
              </CardHeader>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </section>
      <section className="mb-16">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 md:p-12 lg:p-16 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <Badge variant="secondary" className="text-xs uppercase mb-4 inline-block">Limited Time</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Spring Sale: 20% Off All Bouquets</h2>
              <p className="text-xl mb-8 opacity-90">Don't miss out on our seasonal favorites. Fresh flowers delivered tomorrow.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-amber-500 bg-white hover:bg-white/90">Shop Sale</Button>
                <Button variant="outline" size="lg" className="border-white/50 hover:bg-white/10">Learn More</Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Quick Shop by Category</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-24 flex flex-col items-center gap-2 justify-center">
              <span className="text-2xl">🌹</span>
              <span className="text-xs font-medium">Roses</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center gap-2 justify-center">
              <span className="text-2xl">🌷</span>
              <span className="text-xs font-medium">Tulips</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center gap-2 justify-center">
              <span className="text-2xl">🌺</span>
              <span className="text-xs font-medium">Orchids</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center gap-2 justify-center">
              <span className="text-2xl">💐</span>
              <span className="text-xs font-medium">Bouquets</span>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
