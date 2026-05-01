import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | sycords Account Overview",
  description: "Welcome to your sycords dashboard. Manage your servers, billing, domains, and support tickets from one central location.",
}

export default function DashboardPage() {
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">3</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Servers Online</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">75%</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Disk Space Used</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">2</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Active Domains</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">1</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Support Ticket Open</dt>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>Server Management</CardTitle>
              <CardDescription>Control your virtual servers, view metrics, and manage configurations.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>Billing &amp; Invoices</CardTitle>
              <CardDescription>Review your subscriptions, payment history, and update billing details.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>Domain Management</CardTitle>
              <CardDescription>Connect and manage your domains, DNS settings, and SSL certificates.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Open new support requests or check the status of existing ones.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>
    </>
  )
}
