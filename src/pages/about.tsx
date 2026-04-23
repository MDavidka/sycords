import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export function About() {

  return (
    <Card className="max-w-6xl mx-auto p-8">
      <CardHeader>
        <CardTitle>About Our Flower Shop</CardTitle>
        <CardDescription>Discover our story, meet our passionate florists, and learn about our commitment to sustainability and fresh, beautiful flowers.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">Founded in 2015, our flower shop began with a simple dream: to bring the beauty of nature into every home and celebration. From our small storefront, we've grown into a beloved local staple, known for our fresh arrangements and heartfelt service.</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Meet Our Florists</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <div className="text-6xl">🌸</div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Emma Rodriguez</h3>
                <p>Lead Florist</p>
                <p className="text-sm text-muted-foreground">With 10+ years of experience, Emma creates breathtaking arrangements that capture emotion.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center">
                <div className="text-6xl">🌺</div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Liam Chen</h3>
                <p>Senior Designer</p>
                <p className="text-sm text-muted-foreground">Liam specializes in modern, minimalist designs with a focus on seasonal blooms.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <div className="text-6xl">🌻</div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Sophia Patel</h3>
                <p>Floral Artist</p>
                <p className="text-sm text-muted-foreground">Sophia's artistic background brings unique creativity to every custom arrangement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
          <div className="relative">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-2 h-2 bg-primary rounded-full mt-4 md:mt-2 flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold">2015 - Humble Beginnings</h4>
                  <p className="text-muted-foreground">Opened our first storefront with just 5 flower varieties.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-2 h-2 bg-primary rounded-full mt-4 md:mt-2 flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold">2018 - Sustainability Focus</h4>
                  <p className="text-muted-foreground">Partnered with local organic farms and eliminated single-use plastics.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-2 h-2 bg-primary rounded-full mt-4 md:mt-2 flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold">2023 - Community Favorite</h4>
                  <p className="text-muted-foreground">Voted 'Best Florist' three years running by local customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Our Sustainability Practices</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="local-sourcing">
              <AccordionTrigger>100% Local & Seasonal Sourcing</AccordionTrigger>
              <AccordionContent>
                <p>We source all our flowers from local farms within 100 miles, reducing carbon footprint and supporting regional growers.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="eco-packaging">
              <AccordionTrigger>Plastic-Free Packaging</AccordionTrigger>
              <AccordionContent>
                <p>All arrangements use compostable wraps and recycled paper. No plastic vases or floral foam.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="waste-reduction">
              <AccordionTrigger>Zero Waste Commitment</AccordionTrigger>
              <AccordionContent>
                <p>Leftover flowers become community bouquets for hospitals and shelters.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
          <Carousel opts="[object Object]">
            <CarouselContent className="-ml-1">
              <CarouselItem>
                <Card className="w-[380px] max-w-[400px]">
                  <CardContent className="p-6 pt-0 pb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                        <div className="text-2xl">⭐</div>
                      </div>
                      <div>
                        <p className="font-semibold">Sarah M.</p>
                        <p className="text-sm text-muted-foreground">Wedding Client</p>
                      </div>
                    </div>
                    <p className="italic">"The most beautiful wedding flowers I've ever seen. Emma and team went above and beyond—truly magical!"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-[380px] max-w-[400px]">
                  <CardContent className="p-6 pt-0 pb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                        <div className="text-2xl">⭐</div>
                      </div>
                      <div>
                        <p className="font-semibold">Michael R.</p>
                        <p className="text-sm text-muted-foreground">Corporate Client</p>
                      </div>
                    </div>
                    <p className="italic">"Reliable, creative, and always fresh. Liam's modern arrangements transformed our office space."</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-[380px] max-w-[400px]">
                  <CardContent className="p-6 pt-0 pb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <div className="text-2xl">⭐</div>
                      </div>
                      <div>
                        <p className="font-semibold">Jennifer L.</p>
                        <p className="text-sm text-muted-foreground">Regular Customer</p>
                      </div>
                    </div>
                    <p className="italic">"Every bouquet is a work of art. They've become my go-to for birthdays, anniversaries, and just because!"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </CardContent>
    </Card>
  )
}
