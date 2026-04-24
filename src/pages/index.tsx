import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { HardDriveIcon, LockClosedIcon, QuoteIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">Blazing Fast Hosting</h1>
          <p className="mx-auto text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">Lightning speed, ironclad reliability, and enterprise-grade security. Deploy in seconds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">View Pricing</Button>
            <Button variant="outline" size="lg">See Features</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="text-center p-8 rounded-xl bg-card border shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HardDriveIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">NVMe SSD Storage</h3>
            <p className="text-muted-foreground">Ultra-fast NVMe storage with 500MB/s read speeds</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-card border shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheckIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">99.9% Uptime</h3>
            <p className="text-muted-foreground">Guaranteed uptime with global data centers</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-card border shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <LockClosedIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Free SSL Certificates</h3>
            <p className="text-muted-foreground">Automatic SSL encryption for all sites</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Trusted by Leading Teams</h2>
          <Carousel opts="[object Object]" className="w-full">
            <CarouselContent className="-ml-4 md:-ml-8">
              <CarouselItem className="pl-4 md:pl-8">
                <Card className="bg-card border shadow-xl max-w-md mx-auto">
                  <CardContent className="p-8 pt-0">
                    <div className="flex gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-foreground rounded-full flex items-center justify-center">
                        <QuoteIcon className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground text-lg leading-relaxed">"Migrating to this host was the best decision we made. Our site speed improved 3x overnight and support is incredible."</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-4 md:pl-8">
                <Card className="bg-card border shadow-xl max-w-md mx-auto">
                  <CardContent className="p-8 pt-0">
                    <div className="flex gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-foreground rounded-full flex items-center justify-center">
                        <QuoteIcon className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Mike Chen</p>
                        <p className="text-sm text-muted-foreground">Founder, StartupX</p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground text-lg leading-relaxed">"The one-click deployments and staging environments saved us weeks of dev time. Highly recommend!"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-4 md:pl-8">
                <Card className="bg-card border shadow-xl max-w-md mx-auto">
                  <CardContent className="p-8 pt-0">
                    <div className="flex gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-foreground rounded-full flex items-center justify-center">
                        <QuoteIcon className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Emma Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Dev Lead, Ecommerce Co.</p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground text-lg leading-relaxed">"Security features are top-tier. Zero downtime during our Black Friday traffic spike of 10x normal."</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/90 hover:bg-primary" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/90 hover:bg-primary" />
          </Carousel>
        </div>
        <Card className="mx-auto max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Stay Updated</CardTitle>
            <CardDescription>Get the latest hosting updates and exclusive offers</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
              <Input placeholder="Enter your email" type="email" className="flex-1" />
              <Button type="submit" size="sm">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
