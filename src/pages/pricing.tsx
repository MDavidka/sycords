import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { checkoutStarter, checkoutPro } from '@/lib/pricing-logic'

export function Pricing() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 max-w-7xl">
      <div className="text-center mb-20 lg:mb-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent mb-6">Simple, transparent pricing</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">Choose the perfect plan for your needs. No hidden fees, cancel anytime.</p>
        <div className="flex justify-center items-center gap-2 mb-12">
          <Button variant="outline" size="sm" id="monthly-toggle">Monthly</Button>
          <Button variant="default" size="sm" id="yearly-toggle">
            <span>Yearly</span>
            <Badge variant="secondary" className="ml-2">Save 20%</Badge>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
        <Card className="group relative border-2 border-border hover:border-primary/50 transition-all duration-300 lg:hover:-translate-y-2">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">Starter</CardTitle>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">$9</p>
            <p className="text-muted-foreground text-sm">/mo</p>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>1 Website</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>10 GB NVMe Storage</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>Unlimited Bandwidth</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg opacity-75">
              <XMarkIcon className="h-5 w-5 text-muted-foreground" />
              <span>Custom Domain</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={checkoutStarter}>Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="relative border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 lg:col-span-1 shadow-2xl lg:-mt-12 lg:mb-12 group hover:shadow-3xl transition-all duration-500 lg:hover:-translate-y-4">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">Most Popular</div>
          </div>
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">Pro</CardTitle>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">$29</p>
            <p className="text-muted-foreground text-sm">/mo</p>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              <span>Unlimited Websites</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              <span>100 GB NVMe Storage</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>Free Custom Domain</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>Priority Support</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" onClick={checkoutPro}>Choose Pro Plan</Button>
          </CardFooter>
        </Card>
        <Card className="group relative border-2 border-border hover:border-primary/50 transition-all duration-300 lg:hover:-translate-y-2">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Custom</p>
            <p className="text-muted-foreground text-sm">/mo</p>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>Unlimited Everything</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>Dedicated Support</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>Custom SLA</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            <CardDescription>Everything you need to know about our pricing and billing.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="billing-cycle">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans. Payments are processed securely via Stripe.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="cancel-anytime">
                <AccordionTrigger>Can I cancel my subscription anytime?</AccordionTrigger>
                <AccordionContent>Yes! You can cancel your subscription at any time from your dashboard. Your plan will remain active until the end of your current billing cycle.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="refund-policy">
                <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                <AccordionContent>We offer a 30-day money-back guarantee. If you're not satisfied with our hosting for any reason, contact support within 30 days and we'll refund your purchase.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="upgrade-downgrade">
                <AccordionTrigger>Can I upgrade or downgrade my plan?</AccordionTrigger>
                <AccordionContent>Absolutely. You can upgrade or downgrade your plan anytime from the dashboard. Upgrades take effect immediately, downgrades apply at the end of your billing cycle.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="taxes">
                <AccordionTrigger>Are taxes included in the pricing?</AccordionTrigger>
                <AccordionContent>Prices shown exclude applicable taxes and VAT. Taxes will be calculated and added at checkout based on your billing location.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="multiple-sites">
                <AccordionTrigger>Can I host multiple sites on one plan?</AccordionTrigger>
                <AccordionContent>Starter allows 1 site, Pro allows unlimited sites, and Enterprise is fully customizable. Each site gets its own resources and performance guarantees.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
