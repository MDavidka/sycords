import Link from "next/link"
import { Check, Globe, Quote, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Sycords - Deploy Faster, Scale Smarter",
  description: "Instant deployments, real-time monitoring, and team collaboration. Host your projects with Sycords - free tier available.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[linear-gradient(180deg,_hsl(var(--primary)/0.08),_transparent)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-5">
          
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg"><Link href="/login">Start Free</Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/dashboard">Live Demo</Link></Button>
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        
        <dl className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">148</dd>
            <dt className="mt-2 text-sm text-muted-foreground">ms avg deploy</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">24k</dd>
            <dt className="mt-2 text-sm text-muted-foreground">active sites</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">99.99%</dd>
            <dt className="mt-2 text-sm text-muted-foreground">uptime</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">12</dd>
            <dt className="mt-2 text-sm text-muted-foreground">regions</dt>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Git Auto-Deploys</CardTitle>
              <CardDescription className="text-base">Connect GitHub, GitLab, or Bitbucket. Every push deploys instantly with preview environments.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Real-Time Monitoring</CardTitle>
              <CardDescription className="text-base">Live metrics, error tracking, and performance insights. Catch issues before users notice.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Users className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Team Collaboration</CardTitle>
              <CardDescription className="text-base">Invite teammates, set permissions, and review deployments together in a shared dashboard.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Globe className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Global Edge Network</CardTitle>
              <CardDescription className="text-base">Deploy to 12 regions worldwide with automatic traffic optimization and CDN acceleration.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Loved by people who care about quality</h2>
          
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"Sycords cut our deploy times from 15 minutes to 12 seconds. Game changer for our CI/CD pipeline."</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>SC</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">Sarah Chen</p>
                  <p className="text-xs text-muted-foreground">CTO, ScaleUp</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"The dashboard gives us complete visibility. No more firefighting deployments at 2AM."</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>MR</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">Mike Rivera</p>
                  <p className="text-xs text-muted-foreground">DevOps Lead, NextGen</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"Zero-config scaling handled our Black Friday traffic spike perfectly."</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>EP</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">Emma Patel</p>
                  <p className="text-xs text-muted-foreground">Founder, ShopFast</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pricing built for every stage</h2>
          
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Hobby</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight"></span>
                <span className="text-sm text-muted-foreground">mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1 project</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />100GB bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Basic monitoring</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Email support</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="#">Choose plan</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ring-2 ring-primary shadow-xl shadow-primary/10 scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge>Most popular</Badge></div>
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight"></span>
                <span className="text-sm text-muted-foreground">mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Unlimited projects</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1TB bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Real-time metrics</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Priority support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Team collab</li>
              </ul>
              <Button asChild variant="default" className="mt-6 w-full"><Link href="#">Choose plan</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight"></span>
                <span className="text-sm text-muted-foreground">mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Custom limits</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />SLA guarantees</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Dedicated support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Private networking</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Compliance tools</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="#">Choose plan</Link></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Start now and feel the difference within minutes.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/login">Create Account</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
