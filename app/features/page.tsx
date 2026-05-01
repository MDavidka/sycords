import Link from "next/link"
import { Check, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Features - Global deployments, instant previews, zero-config scaling",
  description: "Everything you need for production web apps: edge network, autoscaling, preview deployments, and more.",
}

export default function FeaturesPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-primary/10 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
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
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-16 space-y-16 sm:space-y-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className=" space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Edge Deployments</h3>
              <p className="text-pretty text-muted-foreground">Deploy to 300+ edge locations worldwide. Serve static assets and serverless functions from the closest point.</p>
              
            </div>
            <div className=" aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2 space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Preview Branches</h3>
              <p className="text-pretty text-muted-foreground">Every git push gets a unique preview URL. Perfect for design reviews and stakeholder feedback.</p>
              
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className=" space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Smart Autoscaling</h3>
              <p className="text-pretty text-muted-foreground">Cold starts in &lt;100ms. Scale from 0 to production traffic automatically. No config required.</p>
              
            </div>
            <div className=" aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2 space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Framework Agnostic</h3>
              <p className="text-pretty text-muted-foreground">Next.js, SvelteKit, Remix, Astro, Nuxt. Static sites, SPAs, full-stack apps. All work out of the box.</p>
              
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
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
            <h3 className="mt-1 text-lg font-semibold">Connect GitHub</h3>
            <p className="mt-1 text-sm text-muted-foreground">Click 'Deploy', connect repo. Done.</p>
          </li>
          <li>
            <span className="absolute -left-[11px] mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 02</p>
            <h3 className="mt-1 text-lg font-semibold">Push to deploy</h3>
            <p className="mt-1 text-sm text-muted-foreground">Every git push deploys automatically. Preview URLs for every branch.</p>
          </li>
          <li>
            <span className="absolute -left-[11px] mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 03</p>
            <h3 className="mt-1 text-lg font-semibold">Go to production</h3>
            <p className="mt-1 text-sm text-muted-foreground">Click promote to deploy to your custom domain. Zero downtime.</p>
          </li>
        </ol>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How we compare</h2>
          
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
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
          <p className="text-pretty text-muted-foreground">Start now and feel the difference within minutes.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button asChild size="lg"><Link href="/signup">Deploy Free</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
