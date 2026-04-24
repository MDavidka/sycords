import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { onSelectBasicPlan, onSelectProPlan, onSelectEnterprisePlan } from '@/lib/hosting-logic'

export function HostingPlans() {
  React.useEffect(() => { document.title = "Hosting Plans" }, [])

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 space-y-24">
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Hosting Plans</h1>
          <p className="text-xl text-muted-foreground">Choose the perfect foundation for your website. From personal blogs to high-traffic enterprise applications, we have a plan tailored for your needs.</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Basic</CardTitle>
              <CardDescription>Perfect for personal projects, portfolios, and small blogs.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="text-muted-foreground font-medium">/mo</span>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>1 Website</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>10 GB NVMe Storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>100 GB Bandwidth</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Standard Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" onClick={onSelectBasicPlan}>Select Basic</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col h-full border-primary shadow-lg relative scale-100 lg:scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge className="px-3 py-1 text-xs font-semibold uppercase tracking-wider">Most Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Pro</CardTitle>
              <CardDescription>Ideal for growing businesses, e-commerce, and active communities.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$12.99</span>
                <span className="text-muted-foreground font-medium">/mo</span>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Unlimited Websites</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>50 GB NVMe Storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Unmetered Bandwidth</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Free Domain for 1st Year</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Priority Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default" onClick={onSelectProPlan}>Select Pro</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>Maximum performance and dedicated resources for mission-critical sites.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$39.99</span>
                <span className="text-muted-foreground font-medium">/mo</span>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Unlimited Websites</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Unlimited NVMe Storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Unmetered Bandwidth</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Free Domain Included</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>24/7 Dedicated Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" onClick={onSelectEnterprisePlan}>Select Enterprise</Button>
            </CardFooter>
          </Card>
        </section>
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Compare Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Dive into the technical specifications to see exactly what you get with each tier.</p>
          </div>
          <div className="border rounded-xl overflow-hidden bg-card">
            <Table>
              <TableHeader className="sticky top-0 bg-muted/50 backdrop-blur-sm z-10">
                <TableRow>
                  <TableHead className="w-[300px] font-semibold text-foreground">Feature</TableHead>
                  <TableHead className="text-center font-semibold text-foreground">Basic</TableHead>
                  <TableHead className="text-center font-semibold text-primary">Pro</TableHead>
                  <TableHead className="text-center font-semibold text-foreground">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Storage Space</TableCell>
                  <TableCell className="text-center text-muted-foreground">10 GB NVMe</TableCell>
                  <TableCell className="text-center text-muted-foreground font-medium">50 GB NVMe</TableCell>
                  <TableCell className="text-center text-muted-foreground">Unlimited NVMe</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bandwidth</TableCell>
                  <TableCell className="text-center text-muted-foreground">100 GB</TableCell>
                  <TableCell className="text-center text-muted-foreground font-medium">Unmetered</TableCell>
                  <TableCell className="text-center text-muted-foreground">Unmetered</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">MySQL Databases</TableCell>
                  <TableCell className="text-center text-muted-foreground">1</TableCell>
                  <TableCell className="text-center text-muted-foreground font-medium">10</TableCell>
                  <TableCell className="text-center text-muted-foreground">Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Free SSL Certificate</TableCell>
                  <TableCell className="text-center">
                    <CheckIcon className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Daily Backups</TableCell>
                  <TableCell className="text-center">
                    <XMarkIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Dedicated IP Address</TableCell>
                  <TableCell className="text-center">
                    <XMarkIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <XMarkIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        <section className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Got questions? We've got answers. If you need more help, our support team is available 24/7.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">What is shared hosting?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">Shared hosting is a type of web hosting where multiple websites reside on a single web server connected to the Internet. It's the most economical option for hosting, as the overall cost of server maintenance is amortized over many customers.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">Can I upgrade my plan later?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">Absolutely. You can upgrade or downgrade your hosting plan at any time directly from your control panel. The process is seamless and causes zero downtime for your websites.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">Do you offer a money-back guarantee?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">Yes, we offer a 30-day money-back guarantee on all our shared hosting plans. If you're not completely satisfied with our service within the first 30 days, we'll refund your hosting fees in full.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">Is a free domain included?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">A free domain registration for the first year is included with our Pro and Enterprise plans when you sign up for an annual billing cycle. Standard renewal rates apply after the first year.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium">How do I migrate my existing site?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">We offer free website migration assistance for all new accounts. Once you sign up, simply open a support ticket with your previous host's credentials, and our migration experts will handle the transfer for you.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-medium">What kind of support do you provide?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">Our support team is available 24/7/365 via live chat, email, and support tickets. Pro and Enterprise plans also include priority routing, ensuring your questions are answered even faster.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  )
}
