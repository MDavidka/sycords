import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Bars3Icon, BoltIcon, ChatBubbleLeftIcon, CodeBracketIcon, CpuChipIcon, LinkIcon, MagnifyingGlassIcon, MoonIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { toggleDarkMode } from '@/lib/docs-logic'

export function Documentation() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [darkMode, setDarkMode] = React.useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row">
      <Collapsible defaultOpen className="w-full lg:w-64 lg:border-r border-border">
        <CollapsibleTrigger className="lg:hidden p-4 w-full flex items-center gap-2">
          <Bars3Icon className="h-5 w-5" />
          <span>Docs Navigation</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="lg:block">
          <nav className="p-4 lg:p-6 space-y-2">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Getting Started</h3>
            <Button variant="ghost" className="w-full justify-start h-10 px-2">Installation</Button>
            <Button variant="ghost" className="w-full justify-start h-10 px-2">Quick Deploy</Button>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mt-6">Configuration</h3>
            <Button variant="ghost" className="w-full justify-start h-10 px-2">Domain Setup</Button>
            <Button variant="ghost" className="w-full justify-start h-10 px-2">SSL Installation</Button>
            <Button variant="ghost" className="w-full justify-start h-10 px-2">Environment Variables</Button>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mt-6">API Reference</h3>
            <Button variant="ghost" className="w-full justify-start h-10 px-2">REST API</Button>
            <Button variant="ghost" className="w-full justify-start h-10 px-2">Webhooks</Button>
          </nav>
        </CollapsibleContent>
      </Collapsible>
      <main className="flex-1 lg:min-w-0 p-4 lg:p-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8">
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">Documentation</h1>
            <p className="text-xl text-muted-foreground">Comprehensive guides and API reference for our hosting platform</p>
          </div>
          <div className="flex items-center gap-2 lg:w-96">
            <div className="relative flex-1">
              <Input placeholder="Search docs..." value={searchQuery} onChange={setSearchQuery} className="pl-10 pr-4" />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} id="dark-mode" />
            <MoonIcon className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Domain Setup</CardTitle>
              <CardDescription>Configure custom domains for your applications in 3 simple steps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-0">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h2>Step 1: Add Domain</h2>
                <p>Navigate to your project dashboard and add your custom domain. Our system will automatically generate the required DNS records.</p>
                <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs">
                    <code>Type: A
Name: @
Value: 192.0.2.1
TTL: 3600</code>
                  </pre>
                </div>
                <h2>Step 2: Update DNS</h2>
                <p>Copy the provided DNS records to your domain registrar. Propagation typically takes 5-15 minutes.</p>
                <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs">
                    <code>CNAME: www
Target: your-app.example.com
TTL: 3600</code>
                  </pre>
                </div>
                <h2>Step 3: Verify</h2>
                <p>Our system will automatically verify your DNS configuration. You'll receive email confirmation when complete.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="w-full">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  <span>View Dashboard</span>
                </Button>
                <Button variant="outline" className="w-full">
                  <CodeBracketIcon className="h-4 w-4 mr-2" />
                  <span>CLI Command</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <span>Related Articles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-2">
                <Button variant="ghost" className="w-full justify-start h-12 p-3">
                  <ShieldCheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">SSL Installation</p>
                    <p className="text-xs text-muted-foreground">Automatic certificate provisioning</p>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start h-12 p-3">
                  <CpuChipIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Auto-scaling</p>
                    <p className="text-xs text-muted-foreground">Dynamic resource allocation</p>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start h-12 p-3">
                  <BoltIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">API Reference</p>
                    <p className="text-xs text-muted-foreground">REST and GraphQL endpoints</p>
                  </div>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <Button variant="outline" className="w-full justify-start h-12 p-3" href="/contact">
                  <ChatBubbleLeftIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Contact Support</span>
                </Button>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary">24/7 Response</Badge>
                  </div>
                  <p>Average response time: 18 minutes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
