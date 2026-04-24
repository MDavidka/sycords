import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'
import { ActivityIcon, ArrowPathIcon, ArrowRightIcon, BoltIcon, ChartBarIcon, ChatBubbleLeftIcon, CheckCircleIcon, ClockIcon, CodeBracketIcon, CpuChipIcon, EnvelopeIcon, LanguageIcon, LifebuoyIcon, LockClosedIcon, PhoneIcon, RocketLaunchIcon, ShieldCheckIcon, SparklesIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export function Features() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 space-y-12 lg:space-y-24">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">Everything You Need for Production</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">NVMe SSD storage, global CDN, auto-scaling, and one-click deployments. Built for developers who demand performance.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200" to="/pricing">
            <RocketLaunchIcon className="h-5 w-5" />
            <div>Pick Your Plan</div>
          </Link>
        </div>
      </div>
      <Tabs defaultValue="performance" className="w-full max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 h-16 lg:h-20 p-1 bg-muted/50 rounded-2xl">
          <TabsTrigger value="performance" className="data-[state=active]:bg-background data-[state=active]:shadow-xl data-[state=active]:text-foreground rounded-xl data-[state=active]:border data-[state=active]:border-border flex flex-col items-center gap-1.5 py-2.5 lg:py-3">
            <BoltIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <div>Performance</div>
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-background data-[state=active]:shadow-xl data-[state=active]:text-foreground rounded-xl data-[state=active]:border data-[state=active]:border-border flex flex-col items-center gap-1.5 py-2.5 lg:py-3">
            <ShieldCheckIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <div>Security</div>
          </TabsTrigger>
          <TabsTrigger value="developer" className="data-[state=active]:bg-background data-[state=active]:shadow-xl data-[state=active]:text-foreground rounded-xl data-[state=active]:border data-[state=active]:border-border flex flex-col items-center gap-1.5 py-2.5 lg:py-3">
            <CodeBracketIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <div>Developer</div>
          </TabsTrigger>
          <TabsTrigger value="support" className="data-[state=active]:bg-background data-[state=active]:shadow-xl data-[state=active]:text-foreground rounded-xl data-[state=active]:border data-[state=active]:border-border flex flex-col items-center gap-1.5 py-2.5 lg:py-3">
            <LifebuoyIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <div>Support</div>
          </TabsTrigger>
          <TabsTrigger value="migration" className="data-[state=active]:bg-background data-[state=active]:shadow-xl data-[state=active]:text-foreground rounded-xl data-[state=active]:border data-[state=active]:border-border flex flex-col items-center gap-1.5 py-2.5 lg:py-3">
            <ArrowPathIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <div>Migration</div>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-background data-[state=active]:shadow-xl data-[state=active]:text-foreground rounded-xl data-[state=active]:border data-[state=active]:border-border flex flex-col items-center gap-1.5 py-2.5 lg:py-3">
            <ChartBarIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <div>Analytics</div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="performance" className="mt-12 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl lg:text-4xl font-bold">Blazing Fast Performance</CardTitle>
                <CardDescription className="text-xl mt-2">NVMe SSD storage with global edge caching beats competitors by 3x</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-xl">
                    <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>NVMe SSD</div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-xl">
                    <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>Global CDN</div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-xl">
                    <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>400k IOPS</div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-xl">
                    <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                    <div><50ms TTFB</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">3x</div>
                    <p className="text-sm text-muted-foreground">Faster than AWS</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">2.1x</div>
                    <p className="text-sm text-muted-foreground">Faster than GCP</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">4x</div>
                    <p className="text-sm text-muted-foreground">Faster than Azure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-2 h-48 bg-gradient-to-r from-muted to-muted/50 rounded-2xl p-8">
                <div className="bg-primary/20 h-full rounded-xl animate-pulse" />
                <div className="bg-primary/10 h-3/4 rounded-xl animate-pulse mx-auto mt-4" />
                <div className="bg-primary/15 h-4/5 rounded-xl animate-pulse" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-primary">1.2s</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Load Time</p>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-primary">47ms</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">TTFB</p>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-primary">99.99%</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security" className="mt-12 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Card className="lg:order-2 overflow-hidden shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl font-bold flex items-center gap-3">
                  <ShieldCheckIcon className="h-12 w-12 text-emerald-500 flex-shrink-0" />
                  <div>Enterprise Grade Security</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Automatic DDoS Protection</h4>
                      <p className="text-muted-foreground">Real-time threat detection with 10 Tbps mitigation capacity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                    <LockClosedIcon className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Free SSL Certificates</h4>
                      <p className="text-muted-foreground">Let's Encrypt integration with auto-renewal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:order-1 overflow-hidden shadow-xl border-0 bg-gradient-to-br from-muted/30 to-transparent">
              <CardContent className="p-1">
                <div className="grid grid-cols-2 gap-2 h-80 lg:h-96 bg-gradient-radial from-emerald-500/20 to-transparent rounded-2xl p-8 overflow-hidden relative">
                  <div className="col-span-1 row-span-2 bg-emerald-500/10 rounded-xl animate-pulse" />
                  <div className="col-span-1 bg-emerald-400/20 h-12 rounded-lg mx-auto mt-8 animate-pulse" />
                  <div className="col-span-1 row-span-2 bg-emerald-500/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 flex flex-col justify-end">
                    <div className="text-3xl font-bold text-emerald-500">0 Days</div>
                    <p className="text-emerald-400 text-sm uppercase tracking-wide">Breach Free</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="developer" className="mt-12 lg:mt-20">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Card className="overflow-hidden shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl font-bold">One-Click Deployments</CardTitle>
                <CardDescription>Deploy any app in seconds with pre-configured templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" size="lg" className="h-14 justify-start font-semibold group hover:bg-accent hover:text-accent-foreground">
                    <SparklesIcon className="h-5 w-5 mr-3 flex-shrink-0 group-hover:rotate-12 transition-transform duration-200" />
                    <div>Next.js 15</div>
                    <ArrowRightIcon className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 justify-start font-semibold group hover:bg-accent hover:text-accent-foreground">
                    <CpuChipIcon className="h-5 w-5 mr-3 flex-shrink-0 group-hover:rotate-12 transition-transform duration-200" />
                    <div>Node.js 22</div>
                    <ArrowRightIcon className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 justify-start font-semibold group hover:bg-accent hover:text-accent-foreground md:col-span-2">
                    <LanguageIcon className="h-5 w-5 mr-3 flex-shrink-0 group-hover:rotate-12 transition-transform duration-200" />
                    <div>Static Sites</div>
                    <ArrowRightIcon className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
                <Separator />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                  <Badge variant="secondary" className="px-3 py-1 text-xs">Docker</Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-xs">GitHub</Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-xs">Vercel</Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-xs">Netlify</Badge>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-8 2xl:pl-12">
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">45+ Templates</h3>
                    <p className="text-muted-foreground">Production-ready stacks for every framework</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="support" className="mt-12 lg:mt-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <Card className="overflow-hidden shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl font-bold">24/7 Expert Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-400/10 border border-orange-500/20">
                    <ClockIcon className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-xl"><15 min response</h4>
                      <p className="text-muted-foreground">Priority support for all plans</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-8 lg:pt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="group">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <ChatBubbleLeftIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Live Chat</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <PhoneIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Phone</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <EnvelopeIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Email</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <VideoCameraIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Video</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="migration" className="mt-12 lg:mt-20">
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-0">
            <CardHeader className="text-center pb-12">
              <CardTitle className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Zero Downtime Migration</CardTitle>
              <CardDescription className="text-xl mt-4 max-w-2xl mx-auto">Free migration service from any provider with our battle-tested process</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="space-y-6 lg:border-r lg:border-muted lg:pr-12">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-2xl border border-emerald-500/30">
                  <CheckCircleIcon className="h-8 w-8 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl">Free Migration</h4>
                    <p className="text-muted-foreground">All plans include expert migration</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-2xl border border-blue-500/30">
                  <ClockIcon className="h-8 w-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl"><2 hours setup</h4>
                    <p className="text-muted-foreground">Most migrations complete in hours</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6 lg:pl-12">
                <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl lg:text-4xl font-bold text-indigo-500 mx-auto mb-2">500+</div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Providers</p>
                    </div>
                    <div>
                      <div className="text-3xl lg:text-4xl font-bold text-purple-500 mx-auto mb-2">99.9%</div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Success Rate</p>
                    </div>
                    <div>
                      <div className="text-3xl lg:text-4xl font-bold text-pink-500 mx-auto mb-2">0s</div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Downtime</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="mt-12 lg:mt-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-24 items-start">
            <Card className="xl:order-2 overflow-hidden shadow-xl border-0 bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl lg:text-4xl font-bold">Real-Time Analytics</CardTitle>
                <CardDescription>Monitor performance, traffic, and resource usage with millisecond precision</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ActivityIcon className="h-4 w-4" />
                      <div>Live Metrics</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-foreground">14.2k</div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Req/sec</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CpuChipIcon className="h-4 w-4" />
                      <div>CPU Usage</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-emerald-500">23%</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full w-[23%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="xl:order-1 space-y-8 xl:pr-12">
              <div className="h-72 lg:h-96 bg-gradient-to-br from-slate-900/50 to-slate-800/20 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-pink-500/20 animate-pulse" />
                <div className="relative grid grid-cols-3 gap-4 h-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col h-full animate-pulse" />
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 flex flex-col h-3/4 mx-auto mt-8 animate-pulse" />
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col h-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="text-center pt-20 border-t border-border">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">Join 10,000+ developers building the future</p>
        <Link className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/90 text-primary-foreground px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300" to="/pricing">
          <RocketLaunchIcon className="h-6 w-6" />
          <div>Pick Your Plan</div>
        </Link>
      </div>
    </div>
  )
}
