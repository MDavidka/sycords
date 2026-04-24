import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ExternalLinkIcon, LifebuoyIcon, MagnifyingGlassIcon, MessageCircleIcon, TicketIcon } from '@heroicons/react/24/outline'
import { openLiveChat, submitTicket, resetTicketForm } from '@/lib/support-logic'

export function Support() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [ticketSubject, setTicketSubject] = React.useState('')
  const [ticketDescription, setTicketDescription] = React.useState('')
  const [submitting, setSubmitting] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
      <div className="text-center mb-12 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent mb-4">Support Center</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">24/7 live chat, comprehensive knowledge base, and dedicated support tickets. We're here to help you succeed.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20">
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center gap-3 pb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <svg className="h-6 w-6 text-primary">🟢</svg>
            </div>
            <div>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Instant help from our support team</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="text-sm text-muted-foreground mb-6">Available 24/7 • Average response time: 45 seconds</div>
            <Button size="lg" className="w-full justify-center" onClick={openLiveChat}>
              <MessageCircleIcon className="h-5 w-5 mr-2" />
              <span>Start Live Chat</span>
            </Button>
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">Prefer email? support@hosting.com</p>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>All services operational</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">All Systems Operational</span>
              </div>
              <Badge variant="secondary">100% Uptime</Badge>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://status.hosting.com" />
              <span>View Status Page</span>
              <ExternalLinkIcon className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-20">
        <Card>
          <CardHeader>
            <CardTitle>Knowledge Base</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input placeholder="Search documentation..." className="pl-10" value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-1">Getting Started</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <a href="#">• How to deploy your first site</a>
                  </li>
                  <li>
                    <a href="#">• Connect custom domain</a>
                  </li>
                  <li>
                    <a href="#">• SSL certificate setup</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-1">Troubleshooting</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <a href="#">• Site is down or slow</a>
                  </li>
                  <li>
                    <a href="#">• Database connection issues</a>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Submit a Ticket</CardTitle>
            <CardDescription>Create a support request for complex issues</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Describe your issue..." value={ticketSubject} onChange={setTicketSubject} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Please provide detailed information about your issue..." rows={4} value={ticketDescription} onChange={setTicketDescription} />
            </div>
            <div className="flex gap-2">
              <Button type="submit" onClick={submitTicket} disabled={submitting}>
                <span>Submit Ticket</span>
              </Button>
              <Button type="button" variant="outline" onClick={resetTicketForm}>Reset</Button>
            </div>
            <p className="text-xs text-muted-foreground pt-2">* Response within 2 hours during business hours</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>
            <LifebuoyIcon className="h-8 w-8 mr-2" />
            <span>Need help right now?</span>
          </CardTitle>
          <CardDescription>Our support team is standing by</CardDescription>
        </CardHeader>
        <CardContent className="lg:max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <Button variant="default" size="lg" onClick={openLiveChat}>
              <MessageCircleIcon className="h-5 w-5 mr-2" />
              <span>Live Chat</span>
              <span className="ml-2 text-xs opacity-75">(45s avg)</span>
            </Button>
            <Button size="lg" onClick={submitTicket}>
              <TicketIcon className="h-5 w-5 mr-2" />
              <span>New Ticket</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
