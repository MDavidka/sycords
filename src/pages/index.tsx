import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { ArrowRightIcon, BoltIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, LifebuoyIcon, RocketLaunchIcon, ServerIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline'

export function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Reliable Server Hosting
for Modern Applications</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg leading-relaxed">Deploy with 99.99% uptime, NVMe SSD storage, and enterprise-grade DDoS protection. Scale effortlessly with our global infrastructure.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-md">
              <div className="flex flex-col items-center space-y-2 p-4 bg-card rounded-xl border shadow-sm">
                <div className="text-3xl">99.99%</div>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-card rounded-xl border shadow-sm">
                <div className="text-3xl">10ms</div>
                <p className="text-sm text-muted-foreground">Avg Latency</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-card rounded-xl border shadow-sm">
                <div className="text-3xl">1M+</div>
                <p className="text-sm text-muted-foreground">Requests/sec</p>
              </div>
            </div>
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg">
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              <div>Get Started</div>
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 lg:p-20 aspect-square mx-auto max-w-md">
              <ServerIcon className="h-32 w-32 mx-auto text-primary mb-8" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center space-y-1 p-4 bg-card/50 rounded-2xl">
                  <div className="text-2xl font-bold text-primary">16</div>
                  <p className="text-xs text-muted-foreground">Cores</p>
                </div>
                <div className="flex flex-col items-center space-y-1 p-4 bg-card/50 rounded-2xl">
                  <div className="text-2xl font-bold text-primary">64GB</div>
                  <p className="text-xs text-muted-foreground">RAM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Everything You Need
For Production Workloads</h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">Lightning-fast NVMe storage, enterprise DDoS protection, and 24/7 expert support. Built for developers who demand reliability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-20 h-20 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <BoltIcon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">Blazing Speed</CardTitle>
              <CardDescription>NVMe SSD storage with global CDN edge caching delivers sub-10ms response times worldwide.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircleIcon className="h-4 w-4 text-primary" />
                <div>750K+ IOPS</div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircleIcon className="h-4 w-4 text-primary" />
                <div>10Gbps Network</div>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-20 h-20 bg-destructive/10 group-hover:bg-destructive/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <ShieldCheckIcon className="h-10 w-10 text-destructive group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">Ironclad Security</CardTitle>
              <CardDescription>Multi-layered DDoS mitigation, WAF protection, and automated threat detection keep your apps safe.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircleIcon className="h-4 w-4 text-destructive" />
                <div>99.99% Attack Block</div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircleIcon className="h-4 w-4 text-destructive" />
                <div>ISO 27001 Certified</div>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-20 h-20 bg-secondary/20 group-hover:bg-secondary/40 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <LifebuoyIcon className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">24/7 Expert Support</CardTitle>
              <CardDescription>Dedicated infrastructure engineers available around the clock via chat, ticket, and phone.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircleIcon className="h-4 w-4 text-secondary" />
                <div><2min Response</div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircleIcon className="h-4 w-4 text-secondary" />
                <div>SLA Guaranteed</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Trusted by Leading Teams</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">Join thousands of developers and companies who trust us with their production workloads.</p>
          </div>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-4 md:-ml-8">
              <CarouselItem className="pl-4 md:pl-8">
                <Card className="bg-card border-0 shadow-xl max-w-md mx-auto">
                  <CardContent className="p-12 pt-20">
                    <div className="flex items-center space-x-4 mb-8">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">Sarah Chen</h4>
                        <p className="text-sm text-muted-foreground">CTO, ScaleUp Inc.</p>
                      </div>
                    </div>
                    <p className="text-xl leading-relaxed italic">"Migrating to their platform was the best infrastructure decision we ever made. Zero downtime during cutover and performance improved 3x overnight."</p>
                    <div className="flex items-center space-x-2 mt-8 pt-8 border-t border-border">
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-4 md:pl-8">
                <Card className="bg-card border-0 shadow-xl max-w-md mx-auto">
                  <CardContent className="p-12 pt-20">
                    <div className="flex items-center space-x-4 mb-8">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">Mike Kowalski</h4>
                        <p className="text-sm text-muted-foreground">DevOps Lead, FinTech Co.</p>
                      </div>
                    </div>
                    <p className="text-xl leading-relaxed italic">"Their DDoS protection alone saved us $50K in emergency mitigation costs last quarter. Support team is world-class."</p>
                    <div className="flex items-center space-x-2 mt-8 pt-8 border-t border-border">
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-4 md:pl-8">
                <Card className="bg-card border-0 shadow-xl max-w-md mx-auto">
                  <CardContent className="p-12 pt-20">
                    <div className="flex items-center space-x-4 mb-8">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">Alex Brown</h4>
                        <p className="text-sm text-muted-foreground">Founder, StartupX</p>
                      </div>
                    </div>
                    <p className="text-xl leading-relaxed italic">"One-click deployments and auto-scaling saved our small team months of DevOps work. Perfect for startups."</p>
                    <div className="flex items-center space-x-2 mt-8 pt-8 border-t border-border">
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                      <StarIcon className="h-5 w-5 text-primary fill-primary" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full shadow-lg">
              <ChevronLeftIcon className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full shadow-lg">
              <ChevronRightIcon className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </div>
      </section>
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Ready to Deploy?</h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12">Join thousands of developers building the future on our infrastructure.</p>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-12 py-8 text-xl border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-xl">
            <ArrowRightIcon className="h-6 w-6 mr-3" />
            <div>View Pricing</div>
          </Button>
        </div>
      </section>
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-border bg-muted/50">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl font-bold">Stay Updated</CardTitle>
              <CardDescription>Get product updates, announcements, and early access to new features.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                <Input placeholder="Enter your email" className="col-span-1 sm:col-span-3 h-12" />
                <Button size="sm" className="h-12 px-8 col-span-1 sm:col-span-1">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">No spam. Unsubscribe at any time.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
