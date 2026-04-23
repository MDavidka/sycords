import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { orderStarter, orderPro, orderEnterprise } from '@/lib/pricing-logic'

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = React.useState('')

  return (
    <Card className="max-w-7xl mx-auto p-8">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-center">Simple, transparent pricing</CardTitle>
        <CardDescription className="text-xl text-center max-w-2xl mx-auto">Choose the perfect plan for your needs. No hidden fees, cancel anytime.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-12">
        <div className="flex justify-center mb-12">
          <ToggleGroup type="single" value={billingPeriod} onValueChange={setBillingPeriod}>
            <ToggleGroupItem value="monthly" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground px-6 py-2">Monthly</ToggleGroupItem>
            <ToggleGroupItem value="yearly" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground px-6 py-2">Yearly (20% off)</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-border p-8 group hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <div className="text-4xl font-bold">$19</div>
              <p className="text-muted-foreground">/mo</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>1 Website</span>
                </li>
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>10GB Storage</span>
                </li>
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>Basic Support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" onClick={orderStarter}>Get Started</Button>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary bg-primary/5 relative shadow-xl group hover:shadow-2xl transition-all">
            <Badge variant="secondary" className="absolute -top-4 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <div className="text-4xl font-bold text-primary">$49</div>
              <p className="text-muted-foreground">/mo</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>10 Websites</span>
                </li>
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>100GB Storage</span>
                </li>
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>Priority Support</span>
                </li>
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>Custom Domain</span>
                </li>
              </ul>
              <Button className="w-full" onClick={orderPro}>Get Pro</Button>
            </CardContent>
          </Card>
          <Card className="border-2 border-border p-8 group hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <div className="text-4xl font-bold">$199</div>
              <p className="text-muted-foreground">/mo</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>Unlimited Websites</span>
                </li>
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>1TB Storage</span>
                </li>
                <li className="text-sm flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm mr-2 flex-shrink-0" />
                  <span>24/7 Phone Support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" onClick={orderEnterprise}>Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Feature comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-normal text-muted-foreground p-4">Features</th>
                    <th className="text-center p-4 font-medium">Starter</th>
                    <th className="text-center p-4 font-semibold bg-primary/5">Pro</th>
                    <th className="text-center p-4 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 font-medium">Websites</td>
                    <td className="text-center p-4">1</td>
                    <td className="text-center p-4 font-semibold">10</td>
                    <td className="text-center p-4">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Storage</td>
                    <td className="text-center p-4">10GB</td>
                    <td className="text-center p-4 font-semibold">100GB</td>
                    <td className="text-center p-4">1TB</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Support</td>
                    <td className="text-center p-4">Basic</td>
                    <td className="text-center p-4 font-semibold">Priority</td>
                    <td className="text-center p-4">24/7 Phone</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Custom Domain</td>
                    <td className="text-center p-4">❌</td>
                    <td className="text-center p-4 font-semibold">✅</td>
                    <td className="text-center p-4">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
          <Card>
            <CardHeader>
              <CardTitle>Frequently asked questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="billing">
                  <AccordionTrigger>How does yearly billing work?</AccordionTrigger>
                  <AccordionContent>Yearly billing gives you 20% off compared to monthly. You can switch or cancel anytime. No long-term contracts.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="cancel">
                  <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                  <AccordionContent>Yes! Cancel anytime with one click. No questions asked, no penalties. Your sites stay live until the end of your billing period.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger>What kind of support do you offer?</AccordionTrigger>
                  <AccordionContent>Starter gets email support, Pro gets priority email + chat, Enterprise gets 24/7 phone support with 15-minute response times.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Not sure which plan?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full" href="/features">See all features</Button>
                <Button className="w-full" href="/contact">Talk to sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
