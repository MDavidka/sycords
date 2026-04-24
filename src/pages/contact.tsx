import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ChatBubbleLeftRightIcon, CheckCircleIcon, EnvelopeIcon, MagnifyingGlassIcon, PaperAirplaneIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { onSearch, onSubmitForm, onStartChat } from '@/lib/contact-logic'

export function ContactSupport() {
  React.useEffect(() => { document.title = "Contact & Support" }, [])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [department, setDepartment] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState('')

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">Contact & Support</h1>
            <p className="text-lg text-muted-foreground">We're here to help. Search our knowledge base for quick answers, or reach out to our team directly.</p>
          </div>
          <Badge variant="outline" className="bg-green-50/50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800 flex items-center gap-2 py-1.5 px-3 w-fit">
            <CheckCircleIcon className="w-4 h-4" />
            <span>All Systems Operational</span>
          </Badge>
        </div>
        <Card className="mb-12 border-primary/10 bg-primary/5">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Search knowledge base for articles, guides, and FAQs..." className="pl-10 h-12 text-base bg-background" value={searchQuery} onChange={setSearchQuery} />
              </div>
              <Button size="lg" className="h-12 px-8" onClick={onSearch}>Search</Button>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and our team will get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmitForm} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" value={name} onChange={setName} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={setEmail} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select value={department} onValueChange={setDepartment}>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales & Enterprise Inquiries</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Accounts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} value={message} onChange={setMessage} />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    <PaperAirplaneIcon className="w-4 h-4 mr-2" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">Available 24/7 for urgent technical issues and quick questions.</p>
                  <Button variant="outline" size="sm" className="w-full" onClick={onStartChat}>Start Chat</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">Mon-Fri, 9am-5pm EST.</p>
                  <p className="font-mono text-sm font-medium text-foreground">1-800-555-0199</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">Non-urgent inquiries and general questions.</p>
                  <p className="font-mono text-sm font-medium text-foreground">support@example.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
