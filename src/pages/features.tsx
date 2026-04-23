import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { runSpeedTest } from '@/lib/features-logic'

export function Features() {
  const [speedTestProgress, setSpeedTestProgress] = React.useState('')
  const [speedTestRunning, setSpeedTestRunning] = React.useState('')

  return (
    <main className="flex-1 container max-w-6xl mx-auto py-12 px-4 md:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">Powerful Hosting Features</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">NVMe SSD storage, global CDN, enterprise-grade DDoS protection, one-click app installs, and developer tools built for scale.</p>
      </div>
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="developer">Developer Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="performance">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Blazing Fast Performance</CardTitle>
              <CardDescription>NVMe SSD storage with global CDN edge caching</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="font-semibold">NVMe SSD Storage</span>
                  </div>
                  <p className="text-sm text-muted-foreground">500% faster than traditional SSDs</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="font-semibold">Global CDN</span>
                  </div>
                  <p className="text-sm text-muted-foreground">200+ edge locations worldwide</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="outline" onClick={runSpeedTest}>Run Speed Test</Button>
                <Button variant="default">
                  <a href="/pricing">View Pricing →</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Enterprise-Grade Security</CardTitle>
              <CardDescription>Always-on DDoS protection and advanced threat detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="default">Active</Badge>
                    <span className="font-semibold">DDoS Protection</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Layer 3/4/7 protection up to 10Tbps</p>
                </div>
                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="default">Active</Badge>
                    <span className="font-semibold">WAF</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Web Application Firewall</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="developer">
          <Card>
            <CardHeader>
              <CardTitle>Developer-First Tools</CardTitle>
              <CardDescription>One-click installs and modern deployment workflows</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">One-Click Apps</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">WordPress</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Django</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Git Integration</h4>
                  <p className="text-sm text-muted-foreground">Deploy from GitHub, GitLab, Bitbucket</p>
                </div>
              </div>
              <Button variant="outline">
                <a href="/docs">View Documentation →</a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="overflow-hidden">
        <CardHeader className="pb-4">
          <CardTitle>Compare Plans</CardTitle>
          <CardDescription>See which plan fits your needs</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Starter</TableHead>
                <TableHead>Pro</TableHead>
                <TableHead>Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>NVMe SSD Storage</TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">✓</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">✓</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">✓</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Global CDN</TableCell>
                <TableCell className="text-center">—</TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">✓</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">✓</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>DDoS Protection</TableCell>
                <TableCell className="text-center">Basic</TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">Advanced</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">Enterprise</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>One-Click Apps</TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">10+</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">50+</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="default">100+</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-center pt-6">
          <Button size="lg">
            <a href="/pricing">Choose Your Plan</a>
          </Button>
        </CardFooter>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Live Speed Test</CardTitle>
            <CardDescription>Test our NVMe + CDN performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Download Speed</span>
                <span>$state.speedTestResult ? 1.2 Gbps : 'Testing...'</span>
              </div>
              <Progress value={speedTestProgress} />
            </div>
            <Button onClick={runSpeedTest} disabled={speedTestRunning}>$state.speedTestRunning ? 'Testing...' : 'Run Test'</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="justify-start h-auto p-4">
              <a href="/pricing">View All Plans</a>
            </Button>
            <Button variant="ghost" className="justify-start h-auto p-4">
              <a href="/docs">API Documentation</a>
            </Button>
            <Button variant="ghost" className="justify-start h-auto p-4">
              <a href="/docs/deployments">Deployment Guide</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
