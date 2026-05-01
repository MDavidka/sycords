import Link from "next/link"
import { Check, Quote, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Sycords: Scalable Cloud Hosting for Modern Web Apps & Databases",
  description: "Deploy your web applications and databases with Sycords. Enjoy blazing-fast performance, robust security, and seamless scalability for developers.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[linear-gradient(180deg,_hsl(var(--primary)/0.08),_transparent)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-5">
          
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">Sycords offers blazing-fast, secure, and scalable cloud hosting tailored for modern web applications and databases. Focus on coding, we'll handle the rest.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg"><Link href="/pricing">Start Hosting Now</Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/features">Explore Features</Link></Button>
          </div>
        </div>
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="relative rounded-[1.5rem] border bg-card shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-1.5 border-b px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 text-xs text-muted-foreground">dashboard.preview</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-xl border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">MRR growth</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">+38%</p>
              </div>
              <div className="rounded-xl border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Active teams</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">12k</p>
              </div>
              <div className="rounded-xl border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Avg response</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">&lt;200ms</p>
              </div>
            </div>
            <div className="border-t px-6 py-4 text-xs text-muted-foreground">Live, customizable, and ready in minutes.</div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">Trusted by teams everywhere</p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Vercel</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Next.js</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Supabase</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Turso</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">PlanetScale</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Redis</div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">From instant deployments to global CDN, Sycords provides the tools you need to succeed.</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Instant Global Deployments</CardTitle>
              <CardDescription className="text-base">Launch your applications across our worldwide network in seconds, ensuring low latency for all users.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Scalable Database Hosting</CardTitle>
              <CardDescription className="text-base">Connect your Turso, Supabase, or PlanetScale databases with optimized, high-availability hosting.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Integrated CI/CD Pipelines</CardTitle>
              <CardDescription className="text-base">Automate your deployments with seamless Git integrations and custom build processes.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Real-time Analytics &amp; Monitoring</CardTitle>
              <CardDescription className="text-base">Gain deep insights into your application's performance and user activity with intuitive dashboards.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">99.99%</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Uptime Guarantee</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">12+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Global Regions</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">200&lt;</dd>
            <dt className="mt-2 text-sm text-muted-foreground">ms Average Latency</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">10+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">TB Data Transferred Daily</dt>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">Loved by people who care about quality</h2>
        <figure className="mt-12 rounded-3xl border bg-card p-8 sm:p-12">
          <Quote className="h-10 w-10 text-primary/40" />
          <blockquote className="mt-6 text-pretty text-2xl font-medium leading-relaxed sm:text-3xl">"Sycords transformed our deployment process. We went from hours of setup to minutes, and the performance uplift was immediate. Truly a game-changer for our startup."</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Avatar><AvatarFallback>AC</AvatarFallback></Avatar>
            <div>
              <p className="font-semibold">Alex Chen</p>
              <p className="text-sm text-muted-foreground">CTO, Innovate Labs</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pricing built for every stage</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Choose the plan that fits your project's needs. Scale up or down anytime.</p>
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
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left text-base">What types of applications can I host?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Sycords is optimized for modern web applications including Next.js, React, Vue, Svelte, static sites, and various backend services. We support Docker deployments and serverless functions.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base">How does Sycords ensure high availability?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">We leverage a globally distributed infrastructure with automatic failover, redundant systems, and continuous monitoring to ensure your applications remain online and accessible.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base">Can I connect my existing database?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Yes, Sycords provides seamless integration with popular databases like Turso, Supabase, PlanetScale, PostgreSQL, and MongoDB. You can easily connect and manage your data sources.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base">What kind of support is available?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Our Starter plan includes community support. Pro plans get priority email support, and Enterprise plans receive 24/7 dedicated phone and Slack support with an account manager.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Join thousands of developers who trust Sycords for their mission-critical applications.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/pricing">Deploy Your First Project</Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/contact">Talk to Sales</Link></Button>
        </div>
      </div>
    </section>
    </>
  )
}
