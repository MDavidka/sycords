import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'
import { ChatBubbleLeftRightIcon, CheckCircleIcon, DocumentTextIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { onStartChat, onSubmitContactForm, onChangeFirstName, onChangeLastName, onChangeEmail, onChangeSubject, onChangeMessage } from '@/lib/contact-logic'

export function Contact() {
  React.useEffect(() => { document.title = "Contact" }, [])
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState('')

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Contact</h1>
          <p className="mt-4 text-lg text-muted-foreground">We're here to help. Reach out to our support team or sales department.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <EnvelopeIcon className="h-8 w-8 text-primary mb-3" />
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>24/7 for all plans</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-foreground">support@example.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <PhoneIcon className="h-8 w-8 text-primary mb-3" />
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>Mon-Fri, 9am-5pm EST</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>
              <Card className="sm:col-span-2">
                <CardHeader>
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary mb-3" />
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Available for VPS & Dedicated plans</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" onClick={onStartChat}>Start Chat</Button>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">Knowledge Base</h3>
              <p className="text-muted-foreground mb-6">Find quick answers to common questions in our documentation.</p>
              <ul className="space-y-4">
                <li>
                  <Link className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors" to="/hosting">
                    <DocumentTextIcon className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>How to configure your DNS records</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors" to="/hosting">
                    <DocumentTextIcon className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Upgrading your hosting plan</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors" to="/domains">
                    <DocumentTextIcon className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Domain transfer step-by-step guide</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Card className="shadow-lg h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmitContactForm} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" value={firstName} onChange={onChangeFirstName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" value={lastName} onChange={onChangeLastName} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={onChangeEmail} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={subject} onValueChange={onChangeSubject}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} value={message} onChange={onChangeMessage} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>Send Message</Button>
              </form>
              <Alert className="mt-6 border-green-500/50 bg-green-50/50 text-green-900 dark:bg-green-900/20 dark:text-green-200 dark:border-green-800">
                <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle>Message Sent</AlertTitle>
                <AlertDescription>Thanks for reaching out! We'll get back to you within 24 hours.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
