import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function Documentation() {
  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <div className="container mx-auto p-8 max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="justify-start w-full">Getting Started</Button>
            <Button variant="ghost" className="justify-start w-full">Deployment</Button>
            <Button variant="ghost" className="justify-start w-full">Domain Management</Button>
            <Button variant="ghost" className="justify-start w-full">SSL Setup</Button>
            <Button variant="ghost" className="justify-start w-full">Scaling</Button>
            <Button variant="ghost" className="justify-start w-full">API Reference</Button>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-3 space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
              <div className="flex-1 max-w-md">
                <Input placeholder="Search documentation..." value={searchQuery} onChange={setSearchQuery} />
              </div>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">Comprehensive guides covering deployment, domain management, SSL setup, scaling, and API documentation for technical users.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Quick guides to get you up and running</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-medium">1. Create your first project</p>
                  <p className="text-sm text-muted-foreground">Use our CLI or dashboard to deploy your first site</p>
                  <pre className="mt-2 p-3 bg-muted rounded-md text-sm overflow-x-auto">
                    <code>npx create-hosting@latest my-site</code>
                  </pre>
                  <Button size="sm" variant="outline">Copy code</Button>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-medium">2. Connect your domain</p>
                  <p className="text-sm text-muted-foreground">Add your custom domain in 2 minutes</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-medium">3. Go live!</p>
                  <p className="text-sm text-muted-foreground">Your site is now accessible worldwide</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button>Watch Video Tutorial</Button>
              <Button variant="outline">View All Guides</Button>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Deployment Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Step-by-step instructions for deploying static sites, Next.js apps, and Docker containers.</p>
              <div className="flex gap-2">
                <Badge>Static Sites</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="outline">Docker</Badge>
              </div>
              <Button variant="link" className="p-0 h-auto">Read full guide →</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Complete REST and GraphQL API reference with code examples.</p>
              <pre className="p-3 bg-muted rounded-md text-xs overflow-x-auto">
                <code>GET /api/v1/projects</code>
              </pre>
              <Button size="sm">View API Docs</Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <Button variant="outline">Support Center</Button>
            <Button variant="outline">Pricing</Button>
            <Button variant="outline">Contact Sales</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
