import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ArrowsUpDownIcon, BoltIcon, CheckCircleIcon, ChevronDownIcon, GlobeIcon, LifebuoyIcon, RocketLaunchIcon, ServerIcon, ShieldCheckIcon, SparklesIcon, TruckIcon } from '@heroicons/react/24/outline'

export function Home() {
  const [speedOpen, setSpeedOpen] = React.useState(false)
  const [securityOpen, setSecurityOpen] = React.useState(false)
  const [supportOpen, setSupportOpen] = React.useState(false)
  const [scaleOpen, setScaleOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">High-Performance Cloud Hosting</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-lg leading-relaxed">99.99% uptime guarantee, instant scaling, and NVMe SSD storage. Deploy in seconds, scale without limits.</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mb-12">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary">99.99%</div>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary">250ms</div>
                <p className="text-sm text-muted-foreground">Avg Response</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <p className="text-sm text-muted-foreground">Sites Hosted</p>
              </div>
            </div>
            <Button size="lg" className="mr-4 mb-4">
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              <div>Get Started Free</div>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <div>View Pricing</div>
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 lg:p-16 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div >
                  <ServerIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-center">NVMe SSD</p>
                </div>
                <div >
                  <GlobeIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-center">Global CDN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Lightning-fast performance, enterprise-grade security, and developer-friendly tools. Built for scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          <Card >
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <BoltIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle >Blazing Speed</CardTitle>
            </CardHeader>
            <Collapsible open={speedOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-full justify-start">
                  <ChevronDownIcon className="h-4 w-4 mr-2 transition-transform duration-200" />
                  <div>NVMe SSD, HTTP/3, Edge Caching</div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-2">
                <p className="text-sm text-muted-foreground">250ms global TTFB, unlimited bandwidth, image optimization</p>
                <Badge variant="outline">2x faster than competitors</Badge>
              </CollapsibleContent>
            </Collapsible>
          </Card>
          <Card >
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle >Ironclad Security</CardTitle>
            </CardHeader>
            <Collapsible open={securityOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-full justify-start">
                  <ChevronDownIcon className="h-4 w-4 mr-2 transition-transform duration-200" />
                  <div>DDoS Protection, WAF, Free SSL</div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-2">
                <p className="text-sm text-muted-foreground">Zero-downtime SSL, malware scanning, PCI DSS compliant</p>
                <Badge variant="outline">SOC 2 Type II</Badge>
              </CollapsibleContent>
            </Collapsible>
          </Card>
          <Card >
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <LifebuoyIcon className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle >24/7 Expert Support</CardTitle>
            </CardHeader>
            <Collapsible open={supportOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-full justify-start">
                  <ChevronDownIcon className="h-4 w-4 mr-2 transition-transform duration-200" />
                  <div>Live Chat, Phone, Tickets</div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-2">
                <p className="text-sm text-muted-foreground">Average response <2 min, dedicated Slack channel for Pro+</p>
                <Badge variant="outline">99% CSAT</Badge>
              </CollapsibleContent>
            </Collapsible>
          </Card>
          <Card >
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <ArrowsUpDownIcon className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle >Infinite Scale</CardTitle>
            </CardHeader>
            <Collapsible open={scaleOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-full justify-start">
                  <ChevronDownIcon className="h-4 w-4 mr-2 transition-transform duration-200" />
                  <div>Auto-scaling, Global Regions</div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 space-y-2">
                <p className="text-sm text-muted-foreground">Deploy to 20+ regions, scale to millions of visitors automatically</p>
                <Badge variant="outline">Zero-config</Badge>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      </section>
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Trusted by the Best</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join 10,000+ teams who trust us with their applications</p>
        </div>
        <Carousel opts="[object Object]">
          <CarouselContent className="-ml-1 lg:-ml-4">
            <CarouselItem >
              <Card className="bg-card max-w-md mx-auto">
                <CardContent className="p-8 pt-12 space-y-6">
                  <div className="flex gap-4 text-2xl mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <div className="w-2 h-2 bg-primary/50 rounded-full" />
                    <div className="w-2 h-2 bg-primary/20 rounded-full" />
                  </div>
                  <p className="text-lg leading-relaxed">"Migrating to their platform cut our infra costs by 60% while improving performance 3x. The auto-scaling alone saved us weeks of engineering time."</p>
                  <div className="flex items-center gap-4 pt-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&q=80" />
                      <AvatarFallback >JS</AvatarFallback>
                    </Avatar>
                    <div >
                      <p className="font-semibold">Sarah K.</p>
                      <p className="text-sm text-muted-foreground">CTO, ScaleUp Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem >
              <Card className="bg-card max-w-md mx-auto">
                <CardContent className="p-8 pt-12 space-y-6">
                  <div className="flex gap-4 text-2xl mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <div className="w-2 h-2 bg-primary/50 rounded-full" />
                    <div className="w-2 h-2 bg-primary/20 rounded-full" />
                  </div>
                  <p className="text-lg leading-relaxed">"Their support team is incredible. Fixed a complex database issue in under 15 minutes while we were on a critical deadline."</p>
                  <div className="flex items-center gap-4 pt-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&q=80" />
                      <AvatarFallback >MR</AvatarFallback>
                    </Avatar>
                    <div >
                      <p className="font-semibold">Mike R.</p>
                      <p className="text-sm text-muted-foreground">DevOps Lead, FinTech Co.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext  />
          <CarouselPrevious  />
        </Carousel>
      </section>
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <Badge variant="outline" className="py-3 text-lg border-2">
              <ShieldCheckIcon className="h-6 w-6 mr-2" />
              <div>SOC 2</div>
            </Badge>
            <Badge variant="outline" className="py-3 text-lg border-2">
              <CheckCircleIcon className="h-6 w-6 mr-2" />
              <div>99.99% Uptime</div>
            </Badge>
            <Badge variant="outline" className="py-3 text-lg border-2">
              <TruckIcon className="h-6 w-6 mr-2" />
              <div>14-Day Trial</div>
            </Badge>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Ready to launch?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Start your 14-day free trial today. No credit card required.</p>
            <div className="pt-8">
              <Button size="lg" className="mr-4 mb-4">
                <RocketLaunchIcon className="h-5 w-5 mr-2" />
                <div>Start Free Trial</div>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <div>View Pricing</div>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50">
        <Button size="lg" variant="default" className="shadow-2xl h-14 w-14 p-0 rounded-full group">
          <SparklesIcon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  )
}
