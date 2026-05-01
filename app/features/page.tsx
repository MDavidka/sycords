import Link from "next/link"
import { Check, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Explore Sycords: Global Deployments, Scalable DBs, CI/CD & More",
  description: "Dive deep into Sycords' powerful features, including instant deployments, integrated CI/CD, real-time analytics, and robust security for your web applications.",
}

export default function FeaturesPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">Sycords is engineered with a comprehensive suite of features designed to accelerate your development, optimize performance, and simplify operations.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Every tool you need, built into one powerful platform.</p>
        </div>
        <div className="mt-16 space-y-16 sm:space-y-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className=" space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Global Edge Network</h3>
              <p className="text-pretty text-muted-foreground">Deploy your applications closer to your users with our distributed edge network, reducing latency and improving load times worldwide.</p>
              
            </div>
            <div className=" aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2 space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Automated CI/CD</h3>
              <p className="text-pretty text-muted-foreground">Integrate with your Git repository for automatic deployments on every push. Set up custom build commands and environment variables effortlessly.</p>
              
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className=" space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Flexible Database Integrations</h3>
              <p className="text-pretty text-muted-foreground">Connect to SQL and NoSQL databases like Turso, PostgreSQL, MySQL, and MongoDB with secure, high-speed connections optimized for your application.</p>
              
            </div>
            <div className=" aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2 space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Real-time Monitoring &amp; Alerts</h3>
              <p className="text-pretty text-muted-foreground">Keep a pulse on your application's health with live metrics, custom dashboards, and configurable alerts for performance issues or outages.</p>
              
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
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">From code to deployment, we make it intuitive and fast.</p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">1</div>
            <h3 className="text-lg font-semibold">Connect Your Repository</h3>
            <p className="text-sm text-muted-foreground">Link your GitHub, GitLab, or Bitbucket repository to Sycords in a few clicks.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">2</div>
            <h3 className="text-lg font-semibold">Configure Your Project</h3>
            <p className="text-sm text-muted-foreground">Define build settings, environment variables, and choose your preferred region.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">3</div>
            <h3 className="text-lg font-semibold">Deploy Instantly</h3>
            <p className="text-sm text-muted-foreground">Sycords automatically builds and deploys your application, making it live in moments.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">4</div>
            <h3 className="text-lg font-semibold">Monitor &amp; Scale</h3>
            <p className="text-sm text-muted-foreground">Track performance, view logs, and scale your resources as your needs grow.</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How we compare</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">See how Sycords' modern approach outperforms outdated hosting solutions.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border bg-card">
          <div className="grid grid-cols-3 items-center gap-4 border-b bg-muted/40 px-4 py-3 text-sm font-medium sm:px-6">
            <span>Capability</span>
            <span className="text-center">Us <Badge variant="secondary" className="ml-2 align-middle">recommended</Badge></span>
            <span className="text-center text-muted-foreground">Others</span>
          </div>
          <ul className="divide-y text-sm">
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium">Feature</span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium">Deployment Speed</span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium">Scalability</span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium">Database Integration</span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium">CI/CD</span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
            <li className="grid grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="font-medium">Global CDN</span>
              <span className="flex items-center justify-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" /></span>
              <span className="flex items-center justify-center gap-2 text-muted-foreground"><X className="h-4 w-4" />Limited</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-primary/70 p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
            <p className="text-pretty text-base text-primary-foreground/90">Experience the difference with Sycords' developer-centric hosting platform.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link href="/pricing">Get Started for Free</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
