import Link from "next/link"
import { Check, Quote, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Sycords - Push to deploy cloud hosting",
  description: "Deploy your web apps, APIs, and databases in seconds with Sycords. Built on a global edge network for maximum performance and reliability.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[linear-gradient(180deg,_hsl(var(--primary)/0.08),_transparent)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-5">
          
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">Connect your Git repository and deploy your application to our global edge network in under 3 seconds. Zero configuration required.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg"><Link href="/login">Start Deploying Free</Link></Button>
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
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Acme Corp</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Quantum</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Nexus</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Zephyr</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Nova</div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Sycords abstracts away the infrastructure so you can focus on writing code.</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Global Edge Network</CardTitle>
              <CardDescription className="text-base">Your code runs within 50ms of your users, automatically distributed across 35+ regions.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Instant Rollbacks</CardTitle>
              <CardDescription className="text-base">Pushed a bug? Revert to any previous deployment instantly with a single click.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">DDoS Mitigation</CardTitle>
              <CardDescription className="text-base">Enterprise-grade security and unmetered DDoS protection included on all plans.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Serverless Databases</CardTitle>
              <CardDescription className="text-base">Spin up distributed SQLite databases powered by Turso right alongside your compute.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">We built Sycords to get out of your way. Deploying is as simple as pushing to main.</p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">1</div>
            <h3 className="text-lg font-semibold">Connect Repository</h3>
            <p className="text-sm text-muted-foreground">Link your GitHub, GitLab, or Bitbucket account. We automatically detect your framework.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">2</div>
            <h3 className="text-lg font-semibold">Configure Build</h3>
            <p className="text-sm text-muted-foreground">Review the auto-generated build settings, add any environment variables, and hit deploy.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">3</div>
            <h3 className="text-lg font-semibold">Go Global</h3>
            <p className="text-sm text-muted-foreground">Your app is built, optimized, and pushed to our edge nodes worldwide. SSL is automatically provisioned.</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Loved by people who care about quality</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">See what engineers are saying about the Sycords deployment experience.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"Sycords completely eliminated our DevOps overhead. We just push code and it works. The edge latency is unbelievable."</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>SJ</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">Sarah Jenkins</p>
                  <p className="text-xs text-muted-foreground">CTO at Nexus</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"The instant rollbacks saved us during a catastrophic Black Friday bug. We were back online in 2 seconds."</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>MC</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">Marcus Chen</p>
                  <p className="text-xs text-muted-foreground">Lead Engineer at Zephyr</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"I've tried every hosting platform out there. Sycords is the only one that feels like it was actually built for developers."</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>ER</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">Elena Rodriguez</p>
                  <p className="text-xs text-muted-foreground">Indie Hacker</p>
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
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Start for free, scale when you need to. No hidden bandwidth fees.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Hobby</CardTitle>
              <CardDescription>Perfect for personal projects and experiments.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$0</span>
                <span className="text-sm text-muted-foreground">per month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />3 concurrent builds</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />100GB bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Community support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Standard edge network</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="/login">Deploy Free</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ring-2 ring-primary shadow-xl shadow-primary/10 scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge>Most popular</Badge></div>
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>For professionals and small teams shipping production apps.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$20</span>
                <span className="text-sm text-muted-foreground">per month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />10 concurrent builds</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1TB bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Email support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Premium edge routing</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Custom domains</li>
              </ul>
              <Button asChild variant="default" className="mt-6 w-full"><Link href="/login">Start Pro Trial</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Team</CardTitle>
              <CardDescription>For growing startups needing collaboration and scale.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$99</span>
                <span className="text-sm text-muted-foreground">per month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Unlimited builds</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />5TB bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />24/7 priority support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Advanced analytics</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Team access controls</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="/login">Upgrade to Team</Link></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-primary/70 p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
            <p className="text-pretty text-base text-primary-foreground/90">Join thousands of developers building the future on Sycords.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link href="/login">Create Free Account</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
