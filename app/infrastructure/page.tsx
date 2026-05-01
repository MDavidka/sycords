import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Sycords Infrastructure - Built for Global Scale",
  description: "Explore the Sycords global edge network. NVMe storage, Anycast routing, and enterprise-grade DDoS protection built in.",
}

export default function InfrastructurePage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-primary/10 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#network">View Network Map</Link></Button>
        
      </div>
          
          
        </div>
        <div className="relative rounded-3xl border bg-card p-6 shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/30 to-transparent blur-2xl" aria-hidden="true" />
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-card flex items-end p-6">
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-background/80 backdrop-blur px-3 py-1 text-xs font-medium text-foreground border">Live preview</span>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl border bg-background/60 p-3">
                <p className="text-xl font-semibold tracking-tight">10x</p>
                <p className="text-xs text-muted-foreground">Faster</p>
              </div>
              <div className="rounded-xl border bg-background/60 p-3">
                <p className="text-xl font-semibold tracking-tight">99.9%</p>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </div>
              <div className="rounded-xl border bg-background/60 p-3">
                <p className="text-xl font-semibold tracking-tight">4.9/5</p>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          
        </div>
        <ol className="relative mt-12 space-y-10 border-l border-border pl-8">
          <li>
            <span className="absolute -left-[11px] mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 01</p>
            <h3 className="mt-1 text-lg font-semibold">Anycast Routing</h3>
            <p className="mt-1 text-sm text-muted-foreground">The user's request is instantly routed to the geographically closest edge node.</p>
          </li>
          <li>
            <span className="absolute -left-[11px] mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 02</p>
            <h3 className="mt-1 text-lg font-semibold">DDoS Mitigation</h3>
            <p className="mt-1 text-sm text-muted-foreground">Traffic is scrubbed in real-time to prevent malicious attacks from reaching your application.</p>
          </li>
          <li>
            <span className="absolute -left-[11px] mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 03</p>
            <h3 className="mt-1 text-lg font-semibold">Edge Cache Hit</h3>
            <p className="mt-1 text-sm text-muted-foreground">Static assets and cached API responses are served directly from the edge in milliseconds.</p>
          </li>
          <li>
            <span className="absolute -left-[11px] mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 04</p>
            <h3 className="mt-1 text-lg font-semibold">Serverless Compute</h3>
            <p className="mt-1 text-sm text-muted-foreground">Dynamic requests spin up isolated V8 isolates to execute your application logic securely.</p>
          </li>
        </ol>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">NVMe Storage</h3>
            <p className="text-sm text-muted-foreground">All persistent volumes are backed by redundant NVMe drives for maximum IOPS.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Automated SSL</h3>
            <p className="text-sm text-muted-foreground">Zero-config TLS 1.3 certificates provisioned and renewed automatically.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">VPC Peering</h3>
            <p className="text-sm text-muted-foreground">Securely connect your Sycords deployments to your existing AWS or GCP infrastructure.</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
          <p className="text-pretty text-muted-foreground">Start now and feel the difference within minutes.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button asChild size="lg"><Link href="/login">Deploy Now</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
