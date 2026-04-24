import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { BoltIcon, CheckCircleIcon, GlobeAltIcon, LifebuoyIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { onSubscribe } from '@/lib/about-logic'

export function About() {
  const [newsletterEmail, setNewsletterEmail] = React.useState('')

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">Our Story</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">Empowering the web, one server at a time.</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">nivle was founded on a simple principle: hosting should be fast, reliable, and accessible to everyone. We build infrastructure that scales with your ambition, backed by a team that cares about your success.</p>
      </section>
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">These principles guide every decision we make, from hardware selection to customer support interactions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BoltIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Blazing Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">We use only the latest generation NVMe storage and high-frequency CPUs to ensure your applications run at peak performance.</p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Unwavering Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">With a 99.99% uptime SLA, redundant power, and automated failover, your business stays online when it matters most.</p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <LifebuoyIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">Our in-house team of system administrators is available 24/7/365 to help you solve complex technical challenges.</p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GlobeAltIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">Deploy your infrastructure closer to your users with our strategically located data centers across four continents.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Global Infrastructure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We operate our own enterprise-grade equipment in Tier III and Tier IV data centers around the world, ensuring low latency and data sovereignty.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <CardTitle>North America</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>New York, NY (US-East)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>San Francisco, CA (US-West)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>Toronto, ON (CA-Central)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <CardTitle>Europe</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>London, UK (EU-West)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>Frankfurt, DE (EU-Central)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>Amsterdam, NL (EU-North)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <CardTitle>Asia Pacific</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>Singapore (AP-Southeast)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>Tokyo, JP (AP-Northeast)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircleIcon className="h-4 w-4 text-primary/70" />
                  <span>Sydney, AU (AP-South)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
            <p className="text-muted-foreground">From a single server to a global network.</p>
          </div>
          <div className="space-y-0">
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-bold text-primary sm:absolute left-0 top-10 sm:w-24 sm:text-right mb-2 sm:mb-0 text-lg">2018</div>
              <div className="absolute left-0 sm:left-28 top-11 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />
              <div className="absolute left-1.5 sm:left-[119px] top-14 bottom-0 w-0.5 bg-border" />
              <Card>
                <CardHeader>
                  <CardTitle>The Beginning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">nivle was founded by a small team of developers frustrated with the lack of transparent, high-performance hosting options. We launched our first shared hosting plans from a single rack in New York.</p>
                </CardContent>
              </Card>
            </div>
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-bold text-primary sm:absolute left-0 top-10 sm:w-24 sm:text-right mb-2 sm:mb-0 text-lg">2020</div>
              <div className="absolute left-0 sm:left-28 top-11 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />
              <div className="absolute left-1.5 sm:left-[119px] top-14 bottom-0 w-0.5 bg-border" />
              <Card>
                <CardHeader>
                  <CardTitle>Cloud Expansion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Introduced our proprietary cloud orchestration platform and expanded to Europe, opening our London and Frankfurt data centers to serve a growing international customer base.</p>
                </CardContent>
              </Card>
            </div>
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-bold text-primary sm:absolute left-0 top-10 sm:w-24 sm:text-right mb-2 sm:mb-0 text-lg">2023</div>
              <div className="absolute left-0 sm:left-28 top-11 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />
              <div className="absolute left-1.5 sm:left-[119px] top-14 bottom-0 w-0.5 bg-border group-last:hidden" />
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Launched dedicated bare-metal servers and advanced DDoS protection. Reached the milestone of hosting over 100,000 active websites globally.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-sm">
          <div>
            <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
            <p className="text-muted-foreground mb-6">Subscribe to our newsletter for the latest updates on new data center locations, feature releases, and web hosting tips.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email address" value={newsletterEmail} onChange={setNewsletterEmail} className="max-w-sm bg-background" />
              <Button onClick={onSubscribe}>Subscribe</Button>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
            <h3 className="text-2xl font-bold mb-4">Ready to partner with us?</h3>
            <p className="text-muted-foreground mb-8 max-w-md">Whether you're an agency, an enterprise, or just have a complex setup, our team is ready to help you architect the perfect solution.</p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
