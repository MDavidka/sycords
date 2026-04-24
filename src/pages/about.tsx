import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon, FlowerIcon, HeartIcon, LeafIcon, UserIcon } from '@heroicons/react/24/outline'

export function About() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Card className="max-w-4xl mx-auto text-center">
        <CardHeader>
          <CardTitle className="text-4xl sm:text-5xl font-bold tracking-tight">About Our Flower Shop</CardTitle>
          <CardDescription className="text-xl mt-4 max-w-2xl mx-auto">Handcrafted bouquets with love and care since 2012. We source the freshest flowers from local farms and create arrangements that tell your story.</CardDescription>
        </CardHeader>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Meet Our Florists</CardTitle>
          <CardDescription>Our passionate team brings years of expertise to every arrangement.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          <div className="text-center group">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <UserIcon className="h-12 w-12 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Emma Rodriguez</h3>
            <p className="text-muted-foreground">Lead Florist</p>
            <p className="mt-3 text-sm text-muted-foreground">12+ years creating wedding masterpieces and custom arrangements.</p>
          </div>
          <div className="text-center group">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <LeafIcon className="h-12 w-12 text-background" />
            </div>
            <h3 className="text-xl font-semibold mb-2">James Chen</h3>
            <p className="text-muted-foreground">Sustainability Expert</p>
            <p className="mt-3 text-sm text-muted-foreground">Specializes in eco-friendly sourcing and seasonal designs.</p>
          </div>
          <div className="text-center group">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <HeartIcon className="h-12 w-12 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sarah Patel</h3>
            <p className="text-muted-foreground">Customer Experience</p>
            <p className="mt-3 text-sm text-muted-foreground">Dedicated to making every customer feel special.</p>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Our Events Gallery</CardTitle>
          <CardDescription>Memories we've helped create.</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <Carousel opts="[object Object]" className="w-full">
            <CarouselContent className="-ml-1">
              <CarouselItem>
                <div className="p-1">
                  <div className="flex aspect-[3/2] items-center justify-center bg-muted rounded-xl p-6 text-2xl font-semibold text-muted-foreground">Wedding Bouquet</div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="flex aspect-[3/2] items-center justify-center bg-muted rounded-xl p-6 text-2xl font-semibold text-muted-foreground">Corporate Event</div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="flex aspect-[3/2] items-center justify-center bg-muted rounded-xl p-6 text-2xl font-semibold text-muted-foreground">Birthday Celebration</div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background">
              <ChevronLeftIcon className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background">
              <ChevronRightIcon className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Sustainability Practices</CardTitle>
          <CardDescription>Committed to the planet and our community.</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="local">
              <AccordionTrigger>100% Local Flowers</AccordionTrigger>
              <AccordionContent>We source all our flowers from farms within 100 miles, reducing carbon footprint and supporting local growers.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="compost">
              <AccordionTrigger>Zero Waste</AccordionTrigger>
              <AccordionContent>Every petal and stem is composted. We partner with local farms to return nutrients to the soil.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="packaging">
              <AccordionTrigger>Eco Packaging</AccordionTrigger>
              <AccordionContent>Biodegradable wrapping paper, reusable vases, and recyclable boxes. No plastic ever.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <Card className="bg-primary text-primary-foreground text-center">
        <CardContent className="py-12 px-6 sm:px-12">
          <div className="mx-auto flex flex-col items-center gap-4 max-w-md">
            <FlowerIcon className="h-12 w-12" />
            <h2 className="text-3xl font-bold">Ready to Create Something Beautiful?</h2>
            <p className="text-primary-foreground/90 text-lg">Browse our fresh seasonal collection now.</p>
            <Link to="/shop">
              <Button size="lg" className="w-full sm:w-auto px-8">Shop Flowers</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
