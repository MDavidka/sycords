import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | sycords Cloud Hosting",
  description: "Explore sycords' robust features including instant deployments, advanced security, global scalability, and comprehensive monitoring for your projects.",
}

export default function FeaturesPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-16 space-y-16 sm:space-y-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className=" space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Instant Deployments</h3>
              <p className="text-pretty text-muted-foreground">Launch your applications with unparalleled speed using our optimized deployment pipelines and 1-click integrations. Focus on coding, not infrastructure.</p>
              
            </div>
            <div className=" aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2 space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Robust Security Measures</h3>
              <p className="text-pretty text-muted-foreground">Protect your data with enterprise-grade firewalls, DDoS mitigation, regular backups, and free SSL certificates. Your security is our top priority.</p>
              
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className=" space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Global Scalability</h3>
              <p className="text-pretty text-muted-foreground">Expand your reach and handle traffic spikes effortlessly. Our global network of data centers ensures low latency and high availability for your users worldwide.</p>
              
            </div>
            <div className=" aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2 space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Comprehensive Monitoring</h3>
              <p className="text-pretty text-muted-foreground">Keep a close eye on your server performance with real-time analytics and customizable alerts. Stay informed and proactive about your infrastructure.</p>
              
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">1</div>
            <h3 className="text-lg font-semibold">Choose Your Plan</h3>
            <p className="text-sm text-muted-foreground">Select the hosting package that best fits your project's resource requirements and budget from our flexible options.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">2</div>
            <h3 className="text-lg font-semibold">Deploy Your Application</h3>
            <p className="text-sm text-muted-foreground">Use our intuitive dashboard or API to deploy your code, databases, and services in minutes, with full control.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">3</div>
            <h3 className="text-lg font-semibold">Go Live &amp; Scale</h3>
            <p className="text-sm text-muted-foreground">Launch your project to the world with confidence and scale resources up or down effortlessly as your needs evolve.</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-primary/70 p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
            <p className="text-pretty text-base text-primary-foreground/90">Start now and feel the difference within minutes.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link href="#">Get started</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
