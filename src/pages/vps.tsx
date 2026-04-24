import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Link } from 'react-router-dom'
import { ArrowPathIcon, ArrowRightIcon, CheckBadgeIcon, CircleStackIcon, CommandLineIcon, ComputerDesktopIcon, CpuChipIcon, GlobeAltIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { onCpuChange, onRamChange, onStorageChange, onDeploy } from '@/lib/vps-logic'

export function Vpsservers() {
  const [cpu, setCpu] = React.useState('')
  const [ram, setRam] = React.useState('')
  const [storage, setStorage] = React.useState('')

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6">Enterprise Grade</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">High-Performance VPS Hosting</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">Dedicated resources, full root access, and NVMe storage for developers and scaling businesses. Configure your perfect server below.</p>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CpuChipIcon className="w-6 h-6 text-primary" />
                  <CardTitle>CPU Cores</CardTitle>
                </div>
                <CardDescription>High-frequency AMD EPYC™ processors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Slider min={1} max={32} step={1} value={cpu} onValueChange={onCpuChange} />
                <div className="flex justify-between text-sm text-muted-foreground font-medium">
                  <span>1 Core</span>
                  <span>32 Cores</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ServerIcon className="w-6 h-6 text-primary" />
                  <CardTitle>Memory (RAM)</CardTitle>
                </div>
                <CardDescription>ECC DDR5 Memory for maximum stability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Slider min={2} max={128} step={2} value={ram} onValueChange={onRamChange} />
                <div className="flex justify-between text-sm text-muted-foreground font-medium">
                  <span>2 GB</span>
                  <span>128 GB</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CircleStackIcon className="w-6 h-6 text-primary" />
                  <CardTitle>NVMe Storage</CardTitle>
                </div>
                <CardDescription>Enterprise-grade PCIe 4.0 NVMe SSDs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Slider min={50} max={2000} step={50} value={storage} onValueChange={onStorageChange} />
                <div className="flex justify-between text-sm text-muted-foreground font-medium">
                  <span>50 GB</span>
                  <span>2 TB</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-4 sticky top-8">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="bg-muted/50 border-b border-border pb-6">
                <CardTitle className="text-xl">Estimated Cost</CardTitle>
                <CardDescription>Billed monthly, cancel anytime.</CardDescription>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">$49.00</span>
                  <span className="text-muted-foreground">/ mo</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Processor</span>
                  <span className="font-medium">Dynamic Cores</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Memory</span>
                  <span className="font-medium">Dynamic RAM</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Storage</span>
                  <span className="font-medium">Dynamic NVMe</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Bandwidth</span>
                  <span className="font-medium">10 TB</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3 pt-2">
                <Button className="w-full" size="lg" onClick={onDeploy}>Deploy Server</Button>
                <p className="text-xs text-center text-muted-foreground">Server provisions in under 60 seconds.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-muted/30 py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Specifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Every nivle VPS comes packed with enterprise-grade features designed for maximum performance, security, and reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-background">
              <CardHeader>
                <CommandLineIcon className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Full Root Access</CardTitle>
                <CardDescription>Complete control over your server environment. Install any software, configure custom kernels, and manage your stack.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <ShieldCheckIcon className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Advanced DDoS Protection</CardTitle>
                <CardDescription>Always-on, inline DDoS mitigation up to 2Tbps included free with every server to keep your applications online.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <GlobeAltIcon className="w-8 h-8 text-primary mb-4" />
                <CardTitle>10Gbps Network</CardTitle>
                <CardDescription>Redundant 10Gbps uplinks per host node ensure lightning-fast connectivity and minimal latency globally.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <ComputerDesktopIcon className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Choice of OS</CardTitle>
                <CardDescription>Deploy Ubuntu, Debian, AlmaLinux, Rocky Linux, or Windows Server with a single click from our control panel.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <ArrowPathIcon className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Automated Backups</CardTitle>
                <CardDescription>Optional daily, weekly, or monthly snapshot backups stored off-site for complete peace of mind.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CheckBadgeIcon className="w-8 h-8 text-primary mb-4" />
                <CardTitle>99.99% Uptime SLA</CardTitle>
                <CardDescription>Backed by our financially rewarding Service Level Agreement. We guarantee your server stays online.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Need a custom enterprise solution?</h2>
        <p className="text-lg text-muted-foreground mb-10">If your requirements exceed our standard configurations, our engineering team can design a custom private cloud or dedicated cluster tailored to your exact workload.</p>
        <Button size="lg" variant="outline" asChild>
          <Link className="flex items-center gap-2" to="/contact">
            <span>Contact Sales</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
