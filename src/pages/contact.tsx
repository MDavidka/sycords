import React from 'react'
import { AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { onSubmit } from '@/lib/contact-logic'

export function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitting, setSubmitting] = React.useState('')

  return (
    <main className="container mx-auto p-6 space-y-8 max-w-4xl">
      <Card >
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch with us for any inquiries about our beautiful flowers.</CardDescription>
        </CardHeader>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card >
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" value={name} onChange={setName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={setEmail} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your inquiry..." value={message} onChange={setMessage} />
              </div>
              <Button type="submit" disabled={submitting}>$state.submitting ? 'Sending...' : 'Send Message'</Button>
              <div className="pt-2">
                <div variant="default">
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>Your message has been sent successfully. We'll get back to you soon!</AlertDescription>
                </div>
                <div variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Failed to send message. Please try again.</AlertDescription>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card >
            <CardHeader>
              <CardTitle>Store Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground text-sm text-center">🗺️ Interactive map placeholder (123 Flower St, Floral City)</p>
              </div>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle>Quick Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">📞</span>
                <span>(555) 123-FLOW</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">✉️</span>
                <span>hello@flowershop.com</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">💬</span>
                <span>WhatsApp: (555) 123-FLOW</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card >
        <CardHeader>
          <CardTitle>Operating Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Hours</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Monday - Friday</TableCell>
                <TableCell>9:00 AM - 6:00 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Saturday</TableCell>
                <TableCell>10:00 AM - 5:00 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sunday</TableCell>
                <TableCell>Closed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  )
}
