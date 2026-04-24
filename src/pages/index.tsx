import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, BellIcon, ChevronLeftIcon, ChevronRightIcon, FlowerIcon, HeartIcon, PlayIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

export function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground space-y-12 px-4 sm:px-6 lg:px-8 py-12">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-6">
          <Badge variant="secondary">Spring Collection 2024</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Fresh Blooms for Every Occasion</h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">Discover our seasonal bouquets handcrafted by expert florists. Perfect for birthdays, weddings, anniversaries, and everyday joy.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              <ShoppingBagIcon className="h-5 w-5" />
              <div>Shop All Flowers</div>
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <PlayIcon className="h-5 w-5" />
              <div>Watch Our Story</div>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[3/2] bg-gradient-to-br from-rose-100 to-pink-200 rounded-3xl shadow-2xl" />
          <div className="absolute inset-8 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-2xl shadow-xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <FlowerIcon className="h-24 w-24 mx-auto text-white/80" />
              <div className="text-white">
                <h2 className="text-2xl font-bold">Featured Bouquet</h2>
                <p className="text-lg opacity-90">$89</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Popular Arrangements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Our best-selling bouquets, curated for every moment that matters.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-xl transition-all overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-pink-200 group-hover:scale-105 transition-transform" />
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Birthday</Badge>
              </div>
              <CardTitle className="text-xl leading-tight">Sunflower Symphony</CardTitle>
              <p className="text-muted-foreground text-sm">Bright yellow sunflowers with eucalyptus accents</p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">$59</div>
                <Button size="sm" variant="outline" className="gap-1">
                  <ShoppingCartIcon className="h-4 w-4" />
                  <div>Add to Cart</div>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 via-rose-100 to-lavender-100 group-hover:scale-105 transition-transform" />
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Anniversary</Badge>
              </div>
              <CardTitle className="text-xl leading-tight">Eternal Roses</CardTitle>
              <p className="text-muted-foreground text-sm">12 preserved roses in a keepsake box</p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">$129</div>
                <Button size="sm" variant="outline" className="gap-1">
                  <ShoppingCartIcon className="h-4 w-4" />
                  <div>Add to Cart</div>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-lavender-100 to-indigo-100 group-hover:scale-105 transition-transform" />
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Sympathy</Badge>
              </div>
              <CardTitle className="text-xl leading-tight">Peaceful Lilies</CardTitle>
              <p className="text-muted-foreground text-sm">Elegant white lilies for comfort and peace</p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">$79</div>
                <Button size="sm" variant="outline" className="gap-1">
                  <ShoppingCartIcon className="h-4 w-4" />
                  <div>Add to Cart</div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-16">
          <Link to="/shop">
            <Button size="lg" variant="outline">
              <div>View All Collections</div>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Loved by Thousands</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it. Hear from our happy customers.</p>
        </div>
        <Carousel opts="[object Object]" className="w-full max-w-2xl mx-auto">
          <CarouselContent className="-ml-1">
            <CarouselItem>
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <HeartIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Wedding Client</p>
                    </div>
                  </div>
                  <p className="text-lg italic leading-relaxed text-muted-foreground">"The bouquet was absolutely breathtaking! Our florist captured our vision perfectly and delivered on time for our special day. Highly recommend!"</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <HeartIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Michael R.</p>
                      <p className="text-sm text-muted-foreground">Corporate Client</p>
                    </div>
                  </div>
                  <p className="text-lg italic leading-relaxed text-muted-foreground">"Exceptional quality and service. The arrangements transformed our office space and made such a positive impact on our team morale."</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <HeartIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Emily T.</p>
                      <p className="text-sm text-muted-foreground">Birthday Gift</p>
                    </div>
                  </div>
                  <p className="text-lg italic leading-relaxed text-muted-foreground">"My sister absolutely loved her birthday flowers! The colors were vibrant and they lasted over two weeks. Will definitely order again."</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm">
            <ChevronLeftIcon className="h-5 w-5" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm">
            <ChevronRightIcon className="h-5 w-5" />
          </CarouselNext>
        </Carousel>
      </section>
      <section className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Stay in the Bloom</CardTitle>
            <CardDescription>Get first access to new seasonal collections and exclusive offers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="col-span-1 flex items-center justify-center p-2 bg-muted rounded-lg">
                <HeartIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input placeholder="Enter your email" type="email" className="col-span-3" />
            </div>
            <Button className="w-full">
              <BellIcon className="h-4 w-4 mr-2" />
              <div>Subscribe</div>
            </Button>
            <p className="text-xs text-muted-foreground text-center">No spam, ever. Unsubscribe anytime.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
