import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, BoltIcon, ChartBarIcon, CheckCircleIcon, ClockIcon, CloudArrowUpIcon, CodeBracketIcon, Cog6ToothIcon, Cog8ToothIcon, CpuChipIcon, DatabaseIcon, FingerPrintIcon, LifebuoyIcon, LockClosedIcon, RocketLaunchIcon, ServerIcon, ShieldCheckIcon, ShieldExclamationIcon, SparklesIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export function Features() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 space-y-12 lg:space-y-24">
      <div className="text-center max-w-4xl mx-auto space-y-6 lg:space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Advanced Hosting Features</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Built for developers and sysadmins. NVMe SSD storage, global CDN, one-click installs, enterprise security, and full API access.</p>
      </div>
      <Tabs defaultValue="performance" className="w-full max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-16 lg:h-20">
          <TabsTrigger value="performance">
            <div className="flex items-center gap-2">
              <RocketLaunchIcon className="h-4 w-4" />
              <span>Performance</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="security">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-4 w-4" />
              <span>Security</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="control-panel">
            <div className="flex items-center gap-2">
              <Cog8ToothIcon className="h-4 w-4" />
              <span>Control Panel</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="support">
            <div className="flex items-center gap-2">
              <LifebuoyIcon className="h-4 w-4" />
              <span>Support</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="performance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Card className="overflow-hidden">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BoltIcon className="h-8 w-8 text-primary" />
                  <span>NVMe SSD Storage</span>
                </CardTitle>
                <CardDescription>Ultra-fast NVMe Gen4 storage with 3.5M+ IOPS and <1ms latency.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Sequential Read</span>
                    <Badge variant="secondary">7,000 MB/s</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Sequential Write</span>
                    <Badge variant="secondary">6,500 MB/s</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Random 4K IOPS</span>
                    <Badge variant="default">3.5M+</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">99.99%</div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Uptime SLA</p>
                  </div>
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary"><1ms</div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Avg Latency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Global CDN Network</span>
                    </div>
                    <p className="text-sm text-muted-foreground">200+ edge locations worldwide</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Auto-Scaling</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Scale from 1-1000+ cores instantly</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-8 w-8 text-destructive" />
                  <span>Advanced Security Suite</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <ShieldExclamationIcon className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">DDoS Protection</h4>
                      <p className="text-sm text-muted-foreground">10Tbps+ mitigation capacity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <LockClosedIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">WAF & IPS</h4>
                      <p className="text-sm text-muted-foreground">Real-time threat blocking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <FingerPrintIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">2FA Everywhere</h4>
                      <p className="text-sm text-muted-foreground">Hardware key support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <CloudArrowUpIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Encrypted Backups</h4>
                      <p className="text-sm text-muted-foreground">AES-256 at rest & in transit</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    <span>SOC 2 Type II, ISO 27001, PCI-DSS compliant</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShieldCheckIcon className="h-12 w-12 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Zero Trust Architecture</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">Every request verified. No implicit trust.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="control-panel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card className="overflow-hidden col-span-full lg:col-span-1">
              <CardHeader className="bg-gradient-to-r from-muted to-accent/50">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Cog6ToothIcon className="h-8 w-8" />
                  <span>One-Click Control Panel</span>
                </CardTitle>
                <CardDescription>Deploy apps, manage databases, and monitor performance in seconds.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
                  <div className="group">
                    <div className="w-16 h-16 bg-background border-2 border-dashed border-border rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:border-primary transition-colors">
                      <ServerIcon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground">WordPress</p>
                  </div>
                  <div className="group">
                    <div className="w-16 h-16 bg-background border-2 border-dashed border-border rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:border-primary transition-colors">
                      <DatabaseIcon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground">MySQL</p>
                  </div>
                  <div className="group">
                    <div className="w-16 h-16 bg-background border-2 border-dashed border-border rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:border-primary transition-colors">
                      <CpuChipIcon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground">Node.js</p>
                  </div>
                  <div className="group">
                    <div className="w-16 h-16 bg-background border-2 border-dashed border-border rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:border-primary transition-colors">
                      <CodeBracketIcon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground">Docker</p>
                  </div>
                  <div className="group">
                    <div className="w-16 h-16 bg-background border-2 border-dashed border-border rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:border-primary transition-colors">
                      <ChartBarIcon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground">Analytics</p>
                  </div>
                  <div className="group">
                    <div className="w-16 h-16 bg-background border-2 border-dashed border-border rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:border-primary transition-colors">
                      <WrenchScrewdriverIcon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground">SSH</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>API-First Control Panel</CardTitle>
                <CardDescription>Full REST API access for automation and custom integrations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium">REST API v2</p>
                      <p className="text-sm text-muted-foreground">OAuth2 authentication</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium">WebSocket Events</p>
                      <p className="text-sm text-muted-foreground">Real-time server monitoring</p>
                    </div>
                  </div>
                </div>
                <Link className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80" to="/docs/api">
                  <span>API Documentation →</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="support">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClockIcon className="h-8 w-8 text-primary" />
                  <span>24/7 Expert Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-medium">Average Response</h4>
                      <div className="text-2xl font-bold text-primary"><15 min</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-medium">SLA Resolution</h4>
                      <div className="text-2xl font-bold text-primary"><2 hours</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-4 border-t">
                  <Badge variant="secondary">24/7 Phone</Badge>
                  <Badge variant="secondary">Live Chat</Badge>
                  <Badge variant="secondary">Email</Badge>
                  <Badge variant="secondary">Tickets</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dedicated Account Managers</CardTitle>
                <CardDescription>Personal support for Enterprise customers.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <div>
                      <div className="font-medium">Proactive Monitoring</div>
                      <p className="text-sm text-muted-foreground">24/7 infrastructure monitoring</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <div>
                      <div className="font-medium">Weekly Reports</div>
                      <p className="text-sm text-muted-foreground">Performance & security summary</p>
                    </div>
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      <div className="text-center pt-16 border-t border-border">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-6 py-3 mb-8">
          <SparklesIcon className="h-5 w-5" />
          <span className="font-medium">Ready to deploy?</span>
        </div>
        <Link to="/pricing">
          <Button size="lg" className="text-lg px-8 h-12">
            <span>View Pricing Plans</span>
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Button>
        </Link>
        <p className="text-muted-foreground mt-6 max-w-md mx-auto">Start with our 14-day money-back guarantee. No setup fees.</p>
      </div>
    </div>
  )
}
