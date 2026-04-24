import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ClockIcon, CodeBracketIcon, CreditCardIcon, DocumentTextIcon, EnvelopeIcon, MapPinIcon, PaperAirplaneIcon, PhoneIcon, ServerIcon } from '@heroicons/react/24/outline'
import { onSubmitContactForm } from '@/lib/contact-logic'

export function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState('')

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Support & Sales</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Whether you have a question about features, pricing, or need technical support, our team is ready to answer all your questions.</p>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmitContactForm} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" value={name} onChange={setName} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={setEmail} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">How can we help?</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales & Pricing</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Accounts</SelectItem>
                      <SelectItem value="other">Other Inquiries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please provide as much detail as possible..." rows={5} value={message} onChange={setMessage} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <span>Send Message</span>
                  <PaperAirplaneIcon className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-5 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Find quick answers in our documentation.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#" className="flex items-center p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                  <DocumentTextIcon className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span className="text-sm font-medium">Getting Started</span>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                  <CreditCardIcon className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span className="text-sm font-medium">Billing FAQ</span>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                  <CodeBracketIcon className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span className="text-sm font-medium">API Reference</span>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                  <ServerIcon className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span className="text-sm font-medium">Server Status</span>
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Headquarters</CardTitle>
              <CardDescription>Come visit us or send us mail.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">nivle Inc.</p>
                    <p className="text-sm text-muted-foreground">123 Cloud Avenue, Suite 400</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM (PST)</p>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                  <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                  <p className="text-sm text-muted-foreground">support@nivle.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
