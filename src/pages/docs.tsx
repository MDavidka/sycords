import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRightIcon, CodeBracketIcon, ExclamationTriangleIcon, HomeIcon, LifebuoyIcon, MagnifyingGlassIcon, PlayIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export function Documentation() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
      <div className="text-center mb-12 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Comprehensive guides, API references, and troubleshooting for developers and customers</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span>Search Docs</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Input placeholder="Search documentation..." className="w-full rounded-none border-x-0 border-t-0 border-b-2 focus-visible:ring-0 focus-visible:border-primary h-12" />
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-md cursor-pointer hover:bg-accent">
                <HomeIcon className="h-4 w-4" />
                <span>Getting Started</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-md cursor-pointer hover:bg-accent">
                <CodeBracketIcon className="h-4 w-4" />
                <span>API Reference</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-md cursor-pointer hover:bg-accent">
                <WrenchScrewdriverIcon className="h-4 w-4" />
                <span>Troubleshooting</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
              <TabsTrigger value="getting-started">
                <RocketLaunchIcon className="h-4 w-4 mr-2" />
                <span>Getting Started</span>
              </TabsTrigger>
              <TabsTrigger value="api">
                <CodeBracketIcon className="h-4 w-4 mr-2" />
                <span>API Reference</span>
              </TabsTrigger>
              <TabsTrigger value="troubleshooting">
                <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
                <span>Troubleshooting</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="getting-started" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quickstart Guide</CardTitle>
                    <CardDescription>Deploy your first site in under 2 minutes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <span>1.</span>
                          <span>Connect Domain</span>
                        </h3>
                        <p className="text-sm text-muted-foreground">Add your domain via our one-click DNS setup</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <span>2.</span>
                          <span>Deploy Site</span>
                        </h3>
                        <p className="text-sm text-muted-foreground">Push to Git or upload via SFTP</p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-mono text-sm font-semibold mb-2">React Quickstart</h4>
                      <pre className="bg-background p-3 rounded-md text-xs overflow-x-auto">
                        <code>npm create vite@latest my-site -- --template react\nnpm install\nnpx vite build\n# Deploy build/ folder</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Video Tutorial</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                        <PlayIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Popular Frameworks</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Nuxt</Badge>
                      <Badge variant="secondary">SvelteKit</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="api" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>API Reference</CardTitle>
                  <CardDescription>REST API endpoints for programmatic hosting management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CodeBracketIcon className="h-4 w-4" />
                      <h4 className="font-mono font-semibold">GET /api/v1/sites</h4>
                    </div>
                    <pre className="bg-background p-3 rounded-md text-xs overflow-x-auto">
                      <code>curl -H "Authorization: Bearer YOUR_TOKEN"\n  https://api.hosting.com/v1/sites</code>
                    </pre>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Badge variant="outline">Sites</Badge>
                    <Badge variant="outline">Domains</Badge>
                    <Badge variant="outline">SSL</Badge>
                    <Badge variant="outline">Deployments</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="troubleshooting" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Common Issues</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-md hover:bg-accent cursor-pointer">
                      <ExclamationTriangleIcon className="h-4 w-4 mt-0.5 flex-shrink-0 text-destructive" />
                      <div>
                        <p className="font-medium">Build failed</p>
                        <p className="text-sm text-muted-foreground">Node version mismatch or missing dependencies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-md hover:bg-accent cursor-pointer">
                      <ExclamationTriangleIcon className="h-4 w-4 mt-0.5 flex-shrink-0 text-destructive" />
                      <div>
                        <p className="font-medium">SSL certificate pending</p>
                        <p className="text-sm text-muted-foreground">DNS propagation can take up to 72 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <Button variant="outline" className="w-full justify-start">
                      <LifebuoyIcon className="h-4 w-4 mr-2" />
                      <span>Contact Support</span>
                      <span className="ml-auto">→</span>
                    </Button>
                    <Button variant="default" className="w-full">
                      <ArrowRightIcon className="h-4 w-4 mr-2" />
                      <span>Go to Dashboard</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
