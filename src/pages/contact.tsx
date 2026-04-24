import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, GlobeAmericasIcon, GlobeAsiaAustraliaIcon, GlobeEuropeAfricaIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { handleFileChange } from '@/lib/contact-logic'

export function Contact() {
  const [reason, setReason] = React.useState('')
  const [priority, setPriority] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitting, setSubmitting] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 max-w-7xl">
      <div className="text-center mb-16 lg:mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent mb-6">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Sales inquiries, support tickets, or partnership discussions. Our team responds within 15 minutes during business hours.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <Card className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <div>Contact Form</div>
            </CardTitle>
            <CardDescription>Select your reason and we'll connect you with the right team member</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-0">
            <div>
              <Label htmlFor="reason">Reason for contact</Label>
              <Select value={reason} onValueChange={setReason}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a reason..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="migration">Site Migration</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="priority">Priority</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input type="email" placeholder="your.email@company.com" value={email} onChange={setEmail} />
            <Textarea placeholder="Describe your request in detail..." value={message} onChange={setMessage} rows={4} />
            <div>
              <Label htmlFor="file">Attach files (optional)</Label>
              <Input type="file" id="file" multiple onChange={handleFileChange} />
              <p className="text-sm text-muted-foreground mt-1">Max 10MB per file. PNG, JPG, PDF, ZIP</p>
            </div>
            <div className="flex gap-3 pt-4">
              <Button variant="default" size="lg" className="flex-1" disabled={submitting}>
                <ArrowRightIcon className="h-4 w-4 mr-2" />
                <div>Submit Request</div>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-8 lg:pl-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6 flex items-center gap-4 p-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">15 min response</h3>
                  <p className="text-sm text-muted-foreground">Business hours</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex items-center gap-4 p-6">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <ShieldCheckIcon className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">24/7 Emergency</h3>
                  <p className="text-sm text-muted-foreground">Critical issues</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                <div>Our Locations</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <GlobeAmericasIcon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">New York, NY</p>
                    <p className="text-sm text-muted-foreground">Primary HQ</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <GlobeEuropeAfricaIcon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">London, UK</p>
                    <p className="text-sm text-muted-foreground">EMEA Office</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <GlobeAsiaAustraliaIcon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Singapore</p>
                    <p className="text-sm text-muted-foreground">APAC Office</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="pt-8 border-t border-border space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <SparklesIcon className="h-5 w-5 text-primary" />
              <div>Recent Success Stories</div>
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                <p>Migrated 500+ sites from legacy host in 48 hours</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                <p>Enterprise partnership with Fortune 500 company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
