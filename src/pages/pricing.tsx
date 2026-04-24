import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { BuildingOffice2Icon, BuildingOfficeIcon, CalculatorIcon, CalendarDaysIcon, CalendarIcon, CheckCircleIcon, CheckIcon, CpuChipIcon, QuestionMarkCircleIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function Pricing() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 max-w-7xl">
      <div className="text-center mb-20 lg:mb-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16">Choose the perfect plan for your needs. No hidden fees, instant scaling, and 30-day money-back guarantee.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <div className="flex items-center gap-2 text-sm bg-muted px-4 py-2 rounded-full">
            <CheckCircleIcon className="h-4 w-4 text-primary" />
            <div>30-day money-back guarantee</div>
          </div>
          <div className="flex items-center gap-2 text-sm bg-muted px-4 py-2 rounded-full">
            <ShieldCheckIcon className="h-4 w-4 text-primary" />
            <div>99.99% uptime SLA</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-20">
        <Button variant="outline" size="lg" className="$state.isMonthly ? 'bg-background shadow-lg' : ''">
          <CalendarIcon className="h-5 w-5 mr-2" />
          <div>Monthly</div>
        </Button>
        <Button variant="outline" size="lg" className="$state.isMonthly ? '' : 'bg-background shadow-lg'">
          <CalendarDaysIcon className="h-5 w-5 mr-2" />
          <div>Yearly</div>
          <Badge variant="secondary" className="ml-2">Save 20%</Badge>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-20">
        <Card className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 lg:col-span-1 xl:col-span-1">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <SparklesIcon className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
              <div>Starter</div>
            </CardTitle>
            <div className="text-4xl lg:text-5xl font-bold text-foreground">$9</div>
            <p className="text-2xl text-muted-foreground">$108/year</p>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-bl-lg text-sm font-semibold rotate-[-45deg] translate-x-2 -translate-y-2">Most Popular</div>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>1 vCPU • 2GB RAM</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>50GB NVMe Storage</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>1TB Bandwidth</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full">
              <div>Start Free Trial</div>
            </Button>
          </CardFooter>
        </Card>
        <Card className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 lg:col-span-1 xl:col-span-1">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CpuChipIcon className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
              <div>Pro</div>
            </CardTitle>
            <div className="text-4xl lg:text-5xl font-bold text-foreground">$29</div>
            <p className="text-2xl text-muted-foreground">$348/year</p>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>4 vCPU • 8GB RAM</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>200GB NVMe Storage</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>5TB Bandwidth</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full">
              <div>Start Free Trial</div>
            </Button>
          </CardFooter>
        </Card>
        <Card className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 lg:col-span-1 xl:col-span-1">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BuildingOffice2Icon className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
              <div>Business</div>
            </CardTitle>
            <div className="text-4xl lg:text-5xl font-bold text-foreground">$69</div>
            <p className="text-2xl text-muted-foreground">$828/year</p>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>8 vCPU • 16GB RAM</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>500GB NVMe Storage</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>10TB Bandwidth</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full">
              <div>Start Free Trial</div>
            </Button>
          </CardFooter>
        </Card>
        <Card className="group relative overflow-hidden border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10 lg:col-span-1 xl:col-span-1">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BuildingOfficeIcon className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
              <div>Enterprise</div>
            </CardTitle>
            <div className="text-4xl lg:text-5xl font-bold text-foreground">$99+</div>
            <p className="text-2xl text-muted-foreground">Custom pricing</p>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>Custom vCPU/RAM</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>Unlimited Storage</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>Dedicated Support</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" size="lg" className="w-full">
              <div>Contact Sales</div>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl">Feature Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-normal text-muted-foreground py-4 w-64">Features</th>
                  <th className="text-center py-4 font-medium">Starter</th>
                  <th className="text-center py-4 font-medium">Pro</th>
                  <th className="text-center py-4 font-medium">Business</th>
                  <th className="text-center py-4 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-6 font-medium">vCPU Cores</td>
                  <td className="text-center py-6">1</td>
                  <td className="text-center py-6">4</td>
                  <td className="text-center py-6">8</td>
                  <td className="text-center py-6">Custom</td>
                </tr>
                <tr>
                  <td className="py-6 font-medium">RAM</td>
                  <td className="text-center py-6">2GB</td>
                  <td className="text-center py-6">8GB</td>
                  <td className="text-center py-6">16GB</td>
                  <td className="text-center py-6">Custom</td>
                </tr>
                <tr>
                  <td className="py-6 font-medium">NVMe Storage</td>
                  <td className="text-center py-6">50GB</td>
                  <td className="text-center py-6">200GB</td>
                  <td className="text-center py-6">500GB</td>
                  <td className="text-center py-6">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-6 font-medium">Bandwidth</td>
                  <td className="text-center py-6">1TB</td>
                  <td className="text-center py-6">5TB</td>
                  <td className="text-center py-6">10TB</td>
                  <td className="text-center py-6">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-6 font-medium">24/7 Support</td>
                  <td className="text-center py-6">
                    <CheckIcon className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="text-center py-6">
                    <CheckIcon className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="text-center py-6">
                    <CheckIcon className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="text-center py-6">
                    <CheckIcon className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalculatorIcon className="h-6 w-6" />
              <div>Custom Resource Calculator</div>
            </CardTitle>
            <CardDescription>Calculate costs for your exact needs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label className="text-sm font-medium">CPU Cores</Label>
              <Slider defaultValue={2} max={32} step={1} />
              <div className="flex justify-between text-sm text-muted-foreground">
                <div>1</div>
                <div>32</div>
              </div>
            </div>
            <div className="space-y-4">
              <Label className="text-sm font-medium">RAM (GB)</Label>
              <Slider defaultValue={4} max={128} step={2} />
              <div className="flex justify-between text-sm text-muted-foreground">
                <div>2</div>
                <div>128</div>
              </div>
            </div>
            <div className="space-y-4">
              <Label className="text-sm font-medium">Storage (GB)</Label>
              <Slider defaultValue={100} max={2000} step={50} />
              <div className="flex justify-between text-sm text-muted-foreground">
                <div>50</div>
                <div>2TB</div>
              </div>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-bold text-foreground">$89</p>
                  <p className="text-sm text-muted-foreground">per month (billed yearly)</p>
                </div>
                <Button size="sm">Get Custom Quote</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CpuChipIcon className="h-6 w-6" />
              <div>Recommended Resources</div>
            </CardTitle>
            <CardDescription>Based on your website traffic</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium">Static Site</p>
                <p className="text-sm text-muted-foreground">Blogs, portfolios</p>
              </div>
              <Badge>Starter</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium">E-commerce</p>
                <p className="text-sm text-muted-foreground">Shopify, WooCommerce</p>
              </div>
              <Badge variant="secondary">Pro</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div>
                <p className="font-medium">High Traffic</p>
                <p className="text-sm text-muted-foreground">SaaS, enterprise apps</p>
              </div>
              <Badge variant="default">Business</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QuestionMarkCircleIcon className="h-6 w-6" />
            <div>Frequently Asked Questions</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="billing">
              <AccordionTrigger className="hover:no-underline">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for annual plans.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="trial">
              <AccordionTrigger>What's included in the free trial?</AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">All Starter plan features for 14 days. No credit card required. Upgrade anytime or cancel without penalty.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="upgrade">
              <AccordionTrigger>Can I upgrade or downgrade my plan?</AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">Yes! Upgrade or downgrade instantly. We'll prorate your billing and apply credits automatically. No migration downtime.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="refund">
              <AccordionTrigger>What is your refund policy?</AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">30-day money-back guarantee on all paid plans. No questions asked. Custom Enterprise plans have 14-day refund window.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>What kind of support do you offer?</AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">24/7 live chat and email support on all plans. Pro+ plans include phone support and dedicated account manager.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <div className="text-center mt-20 pt-20 border-t border-border">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto">Join thousands of developers who trust us with their applications.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button size="lg" className="flex-1">
            <div>Start Free Trial</div>
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            <div>Contact Sales</div>
          </Button>
        </div>
      </div>
    </div>
  )
}
