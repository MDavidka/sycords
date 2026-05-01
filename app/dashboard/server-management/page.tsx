import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Server Management | sycords Dashboard",
  description: "Access full control over your sycords virtual servers. Monitor resources, manage power, configure network settings, and handle backups.",
}

export default function DashboardServerManagementPage() {
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
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">12%</dd>
            <dt className="mt-2 text-sm text-muted-foreground">CPU Usage</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">4GB</dd>
            <dt className="mt-2 text-sm text-muted-foreground">RAM Used</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">25%</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Disk Usage</dt>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">200Mbps</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Network In/Out</dt>
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
              <CardTitle>Resource Usage</CardTitle>
              <CardDescription>Monitor CPU, RAM, and disk usage in real-time with detailed graphs.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>Power Controls</CardTitle>
              <CardDescription>Start, stop, or restart your server instance securely with a single click.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>Backups &amp; Snapshots</CardTitle>
              <CardDescription>Create and restore backups, or take instant server snapshots for recovery.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>Network &amp; Firewall</CardTitle>
              <CardDescription>Configure network interfaces, IP addresses, and firewall rules for security.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>Operating System</CardTitle>
              <CardDescription>Reinstall OS or access console for advanced troubleshooting and customization.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="border-border/60 transition hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle>SSH Access</CardTitle>
              <CardDescription>Generate SSH keys and manage remote access to your server securely.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>
    </>
  )
}
