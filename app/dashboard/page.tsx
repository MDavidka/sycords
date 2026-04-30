import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Sycords Dashboard - Projects & Deployments",
  description: "Manage your hosting projects, deployments, and team settings from the Sycords dashboard.",
}

export default function DashboardPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary/15 via-accent/10 to-background p-8 sm:p-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Ship something people remember.</h1>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">3</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Active Projects</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">47</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Deploys This Week</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">2.4</dd>
            <dt className="mt-2 text-sm text-muted-foreground">GB Traffic</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">142</dd>
            <dt className="mt-2 text-sm text-muted-foreground">ms Response Time</dt>
          </div>
        </dl>
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
            <h3 className="text-lg font-semibold">New Project</h3>
            <p className="text-sm text-muted-foreground">Deploy a new site from GitHub</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">View Deployments</h3>
            <p className="text-sm text-muted-foreground">Recent activity and logs</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Team Settings</h3>
            <p className="text-sm text-muted-foreground">Manage users and permissions</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Billing</h3>
            <p className="text-sm text-muted-foreground">Usage and invoices</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
