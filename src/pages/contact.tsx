import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRightIcon, LifebuoyIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function Contact() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 space-y-12 lg:space-y-24">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">Get In Touch</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Ready to scale your infrastructure? Our team is standing by to help you choose the perfect hosting solution.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <Card className="lg:sticky top-24 h-fit">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              <span>Contact Form</span>
            </CardTitle>
            <CardDescription>Submit your inquiry and we'll respond within 2 hours during business hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Interested In</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="starter">Starter Plan</SelectItem>
                  <SelectItem value="pro">Pro Plan</SelectItem>
                  <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                  <SelectItem value="custom">Custom Solution</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your hosting needs..." rows={5} />
            </div>
            <Button size="lg" className="w-full">
              <span>Send Inquiry</span>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card>
            <CardHeader className="flex-row items-center gap-3 pb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <PhoneIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg leading-tight">Sales Team</CardTitle>
                <CardDescription>Mon-Fri 9AM-6PM EST</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="text-2xl font-bold">+1 (555) 123-4567</div>
              <div className="text-sm text-muted-foreground">sales@serverhoster.com</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-3 pb-4">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <LifebuoyIcon className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <CardTitle className="text-lg leading-tight">24/7 Support</CardTitle>
                <CardDescription>Technical assistance anytime</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="text-2xl font-bold">+1 (555) 987-6543</div>
              <div className="text-sm text-muted-foreground">support@serverhoster.com</div>
              <Button variant="outline">Open Support Ticket</Button>
            </CardContent>
          </Card>
          <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50">
            <Button size="lg" className="shadow-2xl h-14 w-14 p-0 rounded-full group hover:scale-110 transition-all duration-200">
              <div className="flex flex-col items-center gap-1 group-hover:-translate-y-1 transition-transform duration-200">
                <MessageCircleIcon className="h-6 w-6" />
                <span className="text-xs font-medium leading-none -mt-1">Live Chat</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Find answers to common hosting questions before reaching out.</p>
        </div>
        <Accordion type="single" collapsible defaultValue={1} className="max-w-4xl mx-auto w-full">
          <AccordionItem value={1}>
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>We accept all major credit cards (Visa, MasterCard, Amex), PayPal, cryptocurrency (BTC, ETH, USDT), and bank wire transfers for enterprise plans.</AccordionContent>
          </AccordionItem>
          <AccordionItem value={2}>
            <AccordionTrigger>Do you offer money-back guarantee?</AccordionTrigger>
            <AccordionContent>Yes! 30-day money-back guarantee on all plans. No questions asked. Enterprise plans have 14-day guarantee.</AccordionContent>
          </AccordionItem>
          <AccordionItem value={3}>
            <AccordionTrigger>What is your server uptime guarantee?</AccordionTrigger>
            <AccordionContent>99.99% uptime guarantee across all plans. We've maintained 99.999% average uptime over the past 12 months.</AccordionContent>
          </AccordionItem>
          <AccordionItem value={4}>
            <AccordionTrigger>Where are your data centers located?</AccordionTrigger>
            <AccordionContent>Primary data centers in Ashburn, VA (US East), Santa Clara, CA (US West), London (EU), Singapore (Asia), and Sydney (Australia).</AccordionContent>
          </AccordionItem>
          <AccordionItem value={5}>
            <AccordionTrigger>Can I migrate my existing website?</AccordionTrigger>
            <AccordionContent>Free website migration for all plans! Our team handles cPanel, Plesk, DirectAdmin, and manual migrations. Zero downtime guaranteed.</AccordionContent>
          </AccordionItem>
          <AccordionItem value={6}>
            <AccordionTrigger>Do you provide SSL certificates?</AccordionTrigger>
            <AccordionContent>Free Let's Encrypt SSL certificates included. Premium SSL (Sectigo, DigiCert) available as add-on starting at $10/year.</AccordionContent>
          </AccordionItem>
          <AccordionItem value={7}>
            <AccordionTrigger>What control panel do you use?</AccordionTrigger>
            <AccordionContent>cPanel/WHM (shared/VPS), DirectAdmin (budget VPS), and custom enterprise control panel for dedicated servers.</AccordionContent>
          </AccordionItem>
          <AccordionItem value={8}>
            <AccordionTrigger>How long does server provisioning take?</AccordionTrigger>
            <AccordionContent>Shared/VPS: Instant provisioning. Dedicated servers: 2-24 hours depending on hardware availability and custom configuration.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/50 pb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Our Data Centers</h3>
            <p className="text-muted-foreground max-w-md mx-auto">Strategically located for optimal global performance and redundancy.</p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-video w-full bg-gradient-to-br from-muted to-background">
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center text-white max-w-md px-4">
                <MapPinIcon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h4 className="text-2xl font-bold mb-2">Interactive Map Coming Soon</h4>
                <p className="text-lg opacity-90">Multiple Tier-4 data centers worldwide</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
