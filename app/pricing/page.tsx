import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Sycords Hosting Plans: Starter, Pro & Enterprise Pricing",
  description: "Choose the right Sycords hosting plan for your project. Transparent pricing for Starter, Pro, and custom Enterprise solutions.",
}

export default function PricingPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">Whether you're launching a personal project or scaling an enterprise application, Sycords has a plan that fits your needs and budget.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pricing built for every stage</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Pay monthly or save with annual billing. Upgrade or downgrade anytime.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Starter</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$0</span>
                <span className="text-sm text-muted-foreground">month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1 Project</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1GB Bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />100GB Storage</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Community Support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Basic Analytics</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="/signup">Get Started Free</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ring-2 ring-primary shadow-xl shadow-primary/10 scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge>Most popular</Badge></div>
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$29</span>
                <span className="text-sm text-muted-foreground">month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />5 Projects</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />500GB Bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1TB Storage</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Priority Email Support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Advanced Analytics &amp; Monitoring</li>
              </ul>
              <Button asChild variant="default" className="mt-6 w-full"><Link href="/pricingpro">Choose Pro</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">Custom</span>
                <span className="text-sm text-muted-foreground">plan</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Unlimited Projects</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Dedicated Bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Custom Storage Solutions</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />24/7 Phone &amp; Slack Support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Dedicated Account Manager</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="/contact">Contact Sales</Link></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          
        </div>
        <dl className="lg:col-span-2 divide-y rounded-2xl border bg-card">
          <div className="px-6 py-5">
            <dt className="font-semibold">Is the Starter plan truly free?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Yes, our Starter plan is completely free forever. It's designed for personal projects and testing, allowing you to experience Sycords without any cost.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">What happens if I exceed my plan limits?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">We'll notify you if you're approaching your limits. You'll have the option to upgrade your plan or discuss custom solutions to avoid service interruptions.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Can I change my plan later?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Absolutely. You can upgrade or downgrade your plan at any time directly from your Sycords dashboard. Changes are prorated for your convenience.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Do you offer discounts for non-profits or education?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Yes, Sycords is committed to supporting good causes. Please contact our sales team to inquire about special pricing for eligible organizations.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">What payment methods do you accept?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">We accept major credit cards including Visa, MasterCard, American Express, and Discover. For Enterprise plans, we can arrange invoicing.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Are there any long-term contracts?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">No, all our plans are month-to-month, giving you maximum flexibility. You can cancel anytime without penalty. Annual billing offers a discount but is not a contract.</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
          <p className="text-pretty text-muted-foreground">Our Enterprise team can tailor a hosting plan specifically for your large-scale requirements and unique infrastructure needs.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button asChild size="lg"><Link href="/contact">Contact Sales</Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/features">View Features</Link></Button>
        </div>
      </div>
    </section>
    </>
  )
}
