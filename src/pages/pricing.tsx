import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Link } from 'react-router-dom'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

export function Pricing() {
  const [billingCycle, setBillingCycle] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 space-y-12 lg:space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">Simple, transparent pricing</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">Choose the perfect plan for your needs. No hidden fees, cancel anytime.</p>
      </div>
      <div className="flex justify-center">
        <ToggleGroup type="single" value={billingCycle} onValueChange={setBillingCycle}>
          <ToggleGroupItem value="monthly" className="data-[state=on]:bg-background shadow-sm">Monthly</ToggleGroupItem>
          <ToggleGroupItem value="annual" className="data-[state=on]:bg-background shadow-sm">
            <Badge variant="secondary" className="ml-2 h-5 w-16">Save 20%</Badge>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <Card className="group relative border-2 border-border hover:border-primary/50 transition-colors lg:hover:-translate-y-2 lg:duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <span>Starter</span>
              <Badge variant="outline">Most Popular</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-6">
            <div className="text-4xl lg:text-5xl font-bold text-foreground">$19</div>
            <p className="text-muted-foreground">/mo</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">1 vCPU Core</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">2 GB RAM</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">50 GB NVMe</span>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-5 h-5 bg-muted rounded-md flex items-center justify-center">
                  <XMarkIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm">Unlimited Bandwidth</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button size="lg" className="w-full">Order Now</Button>
          </CardFooter>
        </Card>
        <Card className="group relative border-2 border-primary/50 bg-primary/5 lg:border-primary lg:bg-primary/10 lg:hover:-translate-y-4 lg:duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <span>Pro</span>
              <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-6">
            <div className="text-4xl lg:text-5xl font-bold text-foreground">$49</div>
            <p className="text-muted-foreground">/mo</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">4 vCPU Cores</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">8 GB RAM</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">250 GB NVMe</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">Unlimited Bandwidth</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">Order Now</Button>
          </CardFooter>
        </Card>
        <Card className="group relative border-2 border-border hover:border-primary/50 transition-colors lg:hover:-translate-y-2 lg:duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Enterprise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-6">
            <div className="text-4xl lg:text-5xl font-bold text-foreground">$149</div>
            <p className="text-muted-foreground">/mo</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">16 vCPU Cores</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">32 GB RAM</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">1 TB NVMe</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">Unlimited Bandwidth</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="lg" className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl">Feature comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="h-12 text-left font-medium">Features</th>
                  <th className="h-12 text-center font-medium">Starter</th>
                  <th className="h-12 text-center font-medium">Pro</th>
                  <th className="h-12 text-center font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="h-12 whitespace-nowrap font-medium">vCPU Cores</td>
                  <td className="h-12 text-center">1</td>
                  <td className="h-12 text-center font-medium">4</td>
                  <td className="h-12 text-center">16</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="h-12 whitespace-nowrap font-medium">RAM</td>
                  <td className="h-12 text-center">2 GB</td>
                  <td className="h-12 text-center font-medium">8 GB</td>
                  <td className="h-12 text-center">32 GB</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="h-12 whitespace-nowrap font-medium">NVMe Storage</td>
                  <td className="h-12 text-center">50 GB</td>
                  <td className="h-12 text-center font-medium">250 GB</td>
                  <td className="h-12 text-center">1 TB</td>
                </tr>
                <tr>
                  <td className="h-12 whitespace-nowrap font-medium">Bandwidth</td>
                  <td className="h-12 text-center">Limited</td>
                  <td className="h-12 text-center font-medium">Unlimited</td>
                  <td className="h-12 text-center">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <div className="text-center">
        <div className="inline-flex bg-muted rounded-full p-1 mb-6">
          <Link className="px-4 py-1.5 bg-background text-foreground rounded-full text-sm font-medium hover:bg-accent" to="/contact">Not sure? Contact sales →</Link>
        </div>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">Every plan includes 99.99% uptime, 24/7 support, and free SSL certificates.</p>
      </div>
    </div>
  )
}
