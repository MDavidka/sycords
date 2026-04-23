import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { submitContact, openLiveChat, callSales, createSupportTicket } from '@/lib/contact-logic'

export function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  return (
    <main className="flex-1 container max-w-6xl mx-auto py-12 px-4 md:px-6 lg:px-8 space-y-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch for sales inquiries, support requests, or partnership opportunities.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" value={name} onChange={setName} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={setEmail} />
          </div>
          <div className="space-y-2">
            <Label>Inquiry Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales Inquiry</SelectItem>
                <SelectItem value="support">Support Request</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan">Plan (optional)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="starter">Starter</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us about your inquiry..." value={message} onChange={setMessage} />
          </div>
          <Button className="w-full" onClick={submitContact}>Send Message</Button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Live Chat</CardTitle>
            <CardDescription>Get instant help from our support team.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" onClick={openLiveChat}>Start Live Chat</Button>
            <div className="text-xs text-muted-foreground text-center pt-2">
              <p>Available 24/7</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="font-medium">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
            </div>
            <Button variant="ghost" className="w-full" onClick={callSales}>Call Now</Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Office Locations</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium">New York HQ</h4>
            <p className="text-sm text-muted-foreground">123 Hosting St, NY 10001</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">San Francisco</h4>
            <p className="text-sm text-muted-foreground">456 Cloud Ave, SF 94105</p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <h4 className="font-medium">London</h4>
            <p className="text-sm text-muted-foreground">789 Server Rd, London EC1A 1BB</p>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Create a support ticket or check our documentation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" onClick={createSupportTicket}>Create Support Ticket</Button>
            <div className="pt-4 space-y-2">
              <Separator />
              <Button variant="ghost" className="w-full justify-start">
                <a href="/docs">Documentation</a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pricing Plans</CardTitle>
            <CardDescription>Ready to get started? Choose your plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <a href="/pricing">View Pricing</a>
            </Button>
            <div className="pt-4 grid grid-cols-3 gap-2">
              <Badge>Starter</Badge>
              <Badge variant="secondary">Pro</Badge>
              <Badge variant="outline">Enterprise</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
