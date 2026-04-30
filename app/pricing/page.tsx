import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans - Sycords",
  description: "Transparent, usage-based pricing for developers and teams of all sizes.",
}

export default function PricingPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">No hidden fees, no complex calculators. Just straightforward pricing that scales alongside your application.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#plans">View Plans</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pricing built for every stage</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Save 20% when you choose annual billing.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>Everything you need to run production apps.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$20</span>
                <span className="text-sm text-muted-foreground">per month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1TB Edge Bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />10 Concurrent Builds</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Custom Domains &amp; SSL</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Email Support</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="/login">Start Pro</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ring-2 ring-primary shadow-xl shadow-primary/10 scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge>Most popular</Badge></div>
            <CardHeader>
              <CardTitle className="text-xl">Team</CardTitle>
              <CardDescription>Advanced collaboration and higher limits.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$99</span>
                <span className="text-sm text-muted-foreground">per month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />5TB Edge Bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Unlimited Builds</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Role-based Access Control</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Priority 24/7 Support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Advanced Analytics</li>
              </ul>
              <Button asChild variant="default" className="mt-6 w-full"><Link href="/login">Start Team</Link></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How we compare</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">A detailed breakdown of what's included in every tier.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border bg-card">
          <div className="grid grid-cols-3 items-center gap-4 border-b bg-muted/40 px-4 py-3 text-sm font-medium sm:px-6">
            <span>Capability</span>
            <span className="text-center">Us <Badge variant="secondary" className="ml-2 align-middle">recommended</Badge></span>
            <span className="text-center text-muted-foreground">Others</span>
          </div>
          <ul className="divide-y text-sm">
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium"></span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium"></span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium"></span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium"></span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          <p className="text-pretty text-muted-foreground">Common questions about our pricing and billing.</p>
        </div>
        <dl className="lg:col-span-2 divide-y rounded-2xl border bg-card">
          <div className="px-6 py-5">
            <dt className="font-semibold">What happens if I exceed my bandwidth limit?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">We will never cut off your traffic. If you exceed your plan's included bandwidth, you will be charged a flat rate of $0.15 per additional GB at the end of your billing cycle.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Can I upgrade or downgrade at any time?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Yes, you can change your plan at any time from your dashboard. Upgrades are prorated immediately, while downgrades take effect at the start of your next billing cycle.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Do you offer open-source discounts?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Absolutely! We love open source. If you are hosting a non-commercial open-source project, contact our support team to get a free Pro tier upgrade.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">How does team billing work?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">The Team plan includes 5 seats. Additional seats can be purchased for $15/month per user. Billing is consolidated to a single invoice for the organization.</dd>
          </div>
        </dl>
      </div>
    </section>
    </>
  )
}
