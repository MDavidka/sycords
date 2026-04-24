import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/outline'
import { onDomainQueryChange, onSearchDomain, onToggleBilling } from '@/lib/index-logic'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])
  const [domainQuery, setDomainQuery] = React.useState('')
  const [isYearly, setIsYearly] = React.useState('')

  return (
    <div>
      <div className="flex flex-col min-h-screen w-full">
        <section className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto text-center flex flex-col items-center">
            <h1 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Home</h1>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl">Secure & Fast Web Hosting for Everyone</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-10">Launch your website in minutes with our reliable, high-performance hosting platform. 99.9% uptime guaranteed.</p>
            <div className="w-full max-w-lg flex flex-col sm:flex-row gap-3">
              <Input placeholder="Find your perfect domain (e.g., myidea.com)" value={domainQuery} onChange={onDomainQueryChange} className="flex-1 h-12 text-base" />
              <Button size="lg" onClick={onSearchDomain} className="h-12 px-8">
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground max-w-[600px]">Choose the perfect plan for your needs. No hidden fees, cancel anytime.</p>
              <div className="flex items-center space-x-4 mt-6 bg-muted/50 p-2 rounded-full">
                <Label htmlFor="billing-toggle" className="text-sm font-medium cursor-pointer px-2">Monthly</Label>
                <Switch id="billing-toggle" checked={isYearly} onCheckedChange={onToggleBilling} />
                <Label htmlFor="billing-toggle" className="text-sm font-medium cursor-pointer px-2 flex items-center gap-2">
                  <span>Yearly</span>
                  <Badge variant="secondary" className="text-xs">Save 20%</Badge>
                </Label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>Perfect for personal blogs and small projects.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-2">$3.99</div>
                  <p className="text-sm text-muted-foreground mb-6">/ month</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>1 Website</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>50 GB SSD Storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>Free SSL Certificate</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/hosting">Select Starter</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full border-primary shadow-lg relative md:-mt-4 md:mb-4">
                <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1">Most Popular</Badge>
                <CardHeader>
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>For growing businesses and online stores.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-2">$8.99</div>
                  <p className="text-sm text-muted-foreground mb-6">/ month</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span className="font-medium text-foreground">Unlimited Websites</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>Unmetered Bandwidth</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>Free Domain for 1 Year</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>Daily Backups</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="/hosting">Select Professional</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>Maximum performance for high-traffic sites.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-2">$19.99</div>
                  <p className="text-sm text-muted-foreground mb-6">/ month</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>Dedicated Resources</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>Free Dedicated IP</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-primary" />
                      <span>Priority 24/7 Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/hosting">Select Enterprise</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by Thousands of Creators</h2>
              <p className="text-muted-foreground max-w-[600px]">Don't just take our word for it. See what our customers have to say about their hosting experience.</p>
            </div>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-4">
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex space-x-1 text-yellow-500 mb-3">
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                      </div>
                      <CardTitle className="text-lg">Incredible Speeds</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">"Migrating to this platform was the best decision I made this year. My site loads instantly now, and my bounce rate has plummeted."</p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-semibold">- Sarah J., Tech Blogger</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex space-x-1 text-yellow-500 mb-3">
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                      </div>
                      <CardTitle className="text-lg">Top-Notch Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">"Whenever I have a technical question, their support team is there within minutes. It feels like having an in-house IT department."</p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-semibold">- Mark T., E-commerce Owner</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex space-x-1 text-yellow-500 mb-3">
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                      </div>
                      <CardTitle className="text-lg">Unbeatable Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">"You get enterprise-level features for a fraction of the cost. I host all my clients' websites here and have never had an issue."</p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-semibold">- Elena R., Web Developer</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto text-center flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Ready to get started?</h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl mb-8">Join thousands of satisfied customers and take your website to the next level today. 30-day money-back guarantee.</p>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold" asChild>
              <Link to="/hosting">View All Hosting Plans</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
