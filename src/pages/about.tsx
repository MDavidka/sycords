import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRightIcon, BarChart3Icon, BuildingOffice2Icon, CheckCircleIcon, CheckIcon, ClockIcon, CpuChipIcon, GlobeAmericasIcon, GlobeAsiaAustraliaIcon, GlobeEuropeAfricaIcon, MailIcon, MapPinIcon, ShieldCheckIcon, SparklesIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline'

export function About() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 space-y-12 lg:space-y-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">About Our Company</h1>
        <p className="mx-auto max-w-3xl text-xl sm:text-2xl text-muted-foreground">Building enterprise-grade hosting infrastructure since 2015. Trusted by 10,000+ businesses worldwide.</p>
      </div>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <BuildingOffice2Icon className="h-8 w-8" />
            <div>Our Story</div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">Founded in 2015 by infrastructure engineers tired of unreliable hosting providers, we've built a global network of data centers powered by the latest NVMe storage and enterprise-grade hardware.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 mt-0.5 text-primary flex-shrink-0" />
                  <p>15+ years combined experience in cloud infrastructure</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 mt-0.5 text-primary flex-shrink-0" />
                  <p>99.99% uptime guarantee across all data centers</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <p className="text-sm text-muted-foreground">Active Servers</p>
              </div>
              <div className="bg-muted rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground">Enterprise Clients</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <UsersIcon className="h-8 w-8" />
              <div>Meet Our Team</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-0">
            <div className="space-y-3 text-center md:text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mx-auto md:mx-0 flex items-center justify-center">
                <UserIcon className="h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Sarah Chen</h3>
              <p className="text-sm text-muted-foreground">CEO & Founder</p>
              <p className="text-xs text-muted-foreground/70">15+ years in cloud infrastructure</p>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl mx-auto md:mx-0 flex items-center justify-center">
                <CpuChipIcon className="h-12 w-12 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Mike Rodriguez</h3>
              <p className="text-sm text-muted-foreground">CTO</p>
              <p className="text-xs text-muted-foreground/70">Hardware optimization expert</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <MapPinIcon className="h-8 w-8" />
              <div>Global Data Centers</div>
            </CardTitle>
            <CardDescription>Strategically located across 3 continents for minimal latency</CardDescription>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Badge variant="secondary">
                <GlobeAmericasIcon className="h-4 w-4 mr-1" />
                <div>USA (3)</div>
              </Badge>
              <Badge variant="secondary">
                <GlobeEuropeAfricaIcon className="h-4 w-4 mr-1" />
                <div>EU (2)</div>
              </Badge>
              <Badge variant="secondary">
                <GlobeAsiaAustraliaIcon className="h-4 w-4 mr-1" />
                <div>Asia (1)</div>
              </Badge>
            </div>
            <div className="h-48 bg-gradient-to-br from-muted to-accent rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground text-sm">📍 Interactive data center map</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3 justify-center">
            <ClockIcon className="h-8 w-8" />
            <div>Company Milestones</div>
          </CardTitle>
        </CardHeader>
        <CardContent className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted" />
            <div className="space-y-8 pb-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">2015 - Founded</h4>
                  <p className="text-muted-foreground mb-2">Started with single data center in Virginia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">2018 - Global Expansion</h4>
                  <p className="text-muted-foreground mb-2">Launched EU and Asia data centers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">2023 - Enterprise Tier</h4>
                  <p className="text-muted-foreground">Introduced dedicated enterprise hosting</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <ShieldCheckIcon className="h-8 w-8" />
              <div>Security & Certifications</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 pt-0">
            <Badge variant="outline" className="text-lg py-3 justify-center">
              <CheckIcon className="h-5 w-5 mr-2" />
              <div>SOC 2</div>
            </Badge>
            <Badge variant="outline" className="text-lg py-3 justify-center">
              <CheckIcon className="h-5 w-5 mr-2" />
              <div>ISO 27001</div>
            </Badge>
            <Badge variant="outline" className="text-lg py-3 justify-center">
              <CheckIcon className="h-5 w-5 mr-2" />
              <div>PCI DSS</div>
            </Badge>
            <Badge variant="outline" className="text-lg py-3 justify-center">
              <CheckIcon className="h-5 w-5 mr-2" />
              <div>GDPR</div>
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <BarChart3Icon className="h-8 w-8" />
              <div>Uptime Statistics</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-0">
            <div className="text-center">
              <div className="text-5xl font-black text-primary">99.99%</div>
              <p className="text-muted-foreground">Average Uptime (Last 12 months)</p>
            </div>
            <div className="h-48 bg-gradient-to-r from-muted/50 to-accent/50 rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground text-sm">📊 Uptime trend chart</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl flex flex-col sm:flex-row items-center justify-center gap-3">
            <SparklesIcon className="h-8 w-8" />
            <div>Ready for Custom Solutions?</div>
          </CardTitle>
          <CardDescription>Get a personalized quote for enterprise hosting, dedicated clusters, or custom infrastructure.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          <Input placeholder="Company name or project requirements" className="h-12" />
          <div className="grid grid-cols-2 gap-4">
            <Input type="email" placeholder="Email address" />
            <Input type="tel" placeholder="Phone (optional)" />
          </div>
          <Textarea placeholder="Tell us about your infrastructure needs..." rows={3} />
          <Button size="lg" className="w-full h-12 text-lg">
            <MailIcon className="h-5 w-5 mr-2" />
            <div>Request Custom Quote</div>
          </Button>
        </CardContent>
      </Card>
      <div className="text-center space-y-4 pt-12">
        <p className="text-xl font-semibold">Ready to get started?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" asChild>
            <ArrowRightIcon className="h-5 w-5 mr-2" />
            <div>View Pricing</div>
          </Button>
          <Button variant="outline" size="lg">
            <div>Contact Sales</div>
          </Button>
        </div>
      </div>
    </div>
  )
}
