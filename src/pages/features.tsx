import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ArrowsPointingInOutIcon, CheckCircleIcon, CheckIcon, CodeBracketIcon, CpuChipIcon, EyeIcon, GlobeAmericasIcon, RocketLaunchIcon, ServerIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function Features() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 space-y-12 lg:space-y-24">
      <div className="text-center mb-24 lg:mb-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Advanced Hosting Features</h1>
        <p className="mx-auto max-w-3xl text-xl sm:text-2xl text-muted-foreground">Built for developers who demand performance, security, and developer experience without compromise.</p>
      </div>
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 bg-transparent p-1 rounded-xl border border-border bg-background">
          <TabsTrigger value="performance" className="data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-foreground rounded-lg data-[state=active]:border-border">
            <div className="flex items-center gap-2">
              <RocketLaunchIcon className="h-4 w-4" />
              <span>Performance</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-foreground rounded-lg data-[state=active]:border-border">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-4 w-4" />
              <span>Security</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="developer" className="data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-foreground rounded-lg data-[state=active]:border-border">
            <div className="flex items-center gap-2">
              <CodeBracketIcon className="h-4 w-4" />
              <span>Developer Tools</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="performance" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <RocketLaunchIcon className="h-8 w-8 text-primary" />
                  <span>Blazing Fast Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <CpuChipIcon className="h-3 w-3" />
                      <span>NVMe SSD Storage</span>
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold">Pure NVMe across all plans</p>
                  <p className="text-muted-foreground">Lightning-fast read/write speeds with enterprise-grade NVMe SSDs. 10x faster than traditional hosting.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <GlobeAmericasIcon className="h-3 w-3" />
                      <span>Global CDN</span>
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold">Anycast CDN network</p>
                  <p className="text-muted-foreground">Edge-cached content delivered from 300+ global PoPs. Reduce latency by up to 80%.</p>
                </div>
              </CardContent>
            </Card>
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-4 text-center p-6 bg-muted/50 rounded-xl">
                    <div>
                      <div className="text-3xl font-bold text-primary">99.99%</div>
                      <p className="text-sm text-muted-foreground">Uptime SLA</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary"><50ms</div>
                      <p className="text-sm text-muted-foreground">TTFB Global</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Performance Benchmarks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>WordPress Load Time</span>
                      <span className="font-semibold">0.8s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Node.js Requests/sec</span>
                      <span className="font-semibold">12,500</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security" className="mt-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <ShieldCheckIcon className="h-8 w-8 text-primary" />
                  <span>Enterprise Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold">DDoS Protection</h4>
                      <p className="text-sm text-muted-foreground">Always-on Layer 3/4/7 DDoS mitigation with 1.5 Tbps capacity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold">WAF & Malware Scanning</h4>
                      <p className="text-sm text-muted-foreground">Web Application Firewall + daily malware scans with auto-cleanup.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="xl:col-span-1 order-first xl:order-last">
              <CardHeader>
                <CardTitle className="text-lg">Security Certifications</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Badge variant="outline" className="justify-center py-3 h-auto">SOC 2 Type II</Badge>
                <Badge variant="outline" className="justify-center py-3 h-auto">ISO 27001</Badge>
                <Badge variant="outline" className="justify-center py-3 h-auto">GDPR</Badge>
                <Badge variant="outline" className="justify-center py-3 h-auto">PCI DSS</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="developer" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CodeBracketIcon className="h-8 w-8 text-primary" />
                  <span>Developer-First Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <SparklesIcon className="h-5 w-5" />
                    <span>One-Click Deployments</span>
                  </h4>
                  <p className="text-muted-foreground mb-4">Deploy WordPress, Next.js, Laravel, Ghost, Strapi and 100+ apps in one click.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <Badge variant="outline" size="sm">Next.js</Badge>
                    <Badge variant="outline" size="sm">WordPress</Badge>
                    <Badge variant="outline" size="sm">Laravel</Badge>
                    <Badge variant="outline" size="sm">Ghost</Badge>
                    <Badge variant="outline" size="sm">Strapi</Badge>
                    <Badge variant="outline" size="sm">Django</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <ArrowsPointingInOutIcon className="h-5 w-5" />
                    <span>Staging Environments</span>
                  </h4>
                  <p className="text-muted-foreground">Automatic staging sites with git-based deployments and one-click sync to production.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Control Panel Demo</CardTitle>
                <CardDescription>Modern interface built for developers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-muted to-accent p-4 rounded-xl space-y-2">
                    <div className="h-20 bg-background/80 rounded-lg flex items-center justify-center">
                      <ServerIcon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-xs font-medium">Deployments</p>
                  </div>
                  <div className="bg-gradient-to-br from-muted to-accent p-4 rounded-xl space-y-2">
                    <div className="h-20 bg-background/80 rounded-lg flex items-center justify-center">
                      <CpuChipIcon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-xs font-medium">Resources</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <EyeIcon className="h-4 w-4 mr-2" />
                  <span>View Full Demo</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-3xl">Better Than The Competition</CardTitle>
          <CardDescription className="text-center max-w-2xl mx-auto">Feature comparison showing why developers choose us over traditional hosts.</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="w-full min-w-[800px] lg:min-w-[1000px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px] font-semibold">Feature</TableHead>
                  <TableHead className="font-semibold text-primary bg-primary/5">Us</TableHead>
                  <TableHead>Competitor A</TableHead>
                  <TableHead>Competitor B</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Storage</TableCell>
                  <TableCell className="font-semibold text-primary">NVMe SSD</TableCell>
                  <TableCell>HDD</TableCell>
                  <TableCell>SATA SSD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CDN</TableCell>
                  <TableCell className="font-semibold text-primary">
                    <CheckIcon className="h-4 w-4 mx-auto" />
                  </TableCell>
                  <TableCell>$10/mo</TableCell>
                  <TableCell>No</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1-Click Apps</TableCell>
                  <TableCell className="font-semibold text-primary">100+</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Staging Sites</TableCell>
                  <TableCell className="font-semibold text-primary">
                    <CheckIcon className="h-4 w-4 mx-auto" />
                  </TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>$5/mo</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DDoS Protection</TableCell>
                  <TableCell className="font-semibold text-primary">Included</TableCell>
                  <TableCell>$20/mo</TableCell>
                  <TableCell>No</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <div className="text-center">
        <div className="inline-flex bg-muted/50 rounded-full px-6 py-3 mb-8">
          <Badge variant="secondary" className="text-lg px-4 py-1">Most Popular</Badge>
        </div>
        <Link to="/pricing">
          <Button size="lg" className="text-lg px-12 py-8 bg-primary hover:bg-primary/90 shadow-2xl">
            <span>Start with Pro Plan</span>
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Button>
        </Link>
        <p className="text-lg text-muted-foreground mt-6">14-day money back guarantee • No setup fees • Cancel anytime</p>
      </div>
    </div>
  )
}
