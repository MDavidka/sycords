'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

interface Props {
  setName: (value: string) => void
  setEmail: (value: string) => void
  setMessage: (value: unknown) => void
}

export function Contact({ setName, setEmail, setMessage }: Props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState(undefined)
  const [submitting, setSubmitting] = React.useState(undefined)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
          <CardHeader className="text-center sm:text-left">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Visit Our Flower Shop</CardTitle>
            <CardDescription className="text-lg mt-2">Come see our beautiful arrangements in person</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Store Location</h3>
                  <p className="text-sm text-muted-foreground mt-1">123 Blossom Street
Flower District, FL 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Contact</h3>
                  <p className="text-sm text-muted-foreground mt-1">(555) 123-FLOW
hello@blossomshop.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 pt-2">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hours</h3>
                  <p className="text-sm text-muted-foreground mt-1 space-y-1">
                    <span>Mon-Fri: 9AM - 7PM
</span>
                    <span>Sat: 10AM - 6PM
</span>
                    <span>Sun: 11AM - 5PM</span>
                  </p>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/50 dark:to-green-950/50 p-6 rounded-2xl border border-emerald-200/50">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <span className="text-2xl mr-2">🚚</span>
                <span>Delivery Area</span>
              </h3>
              <p className="text-sm text-muted-foreground">Free delivery within 20 miles of our store. $5 flat rate for 20-40 miles. Call for areas beyond 40 miles.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Get In Touch</CardTitle>
            <CardDescription>Send us a message for custom orders, inquiries, or special requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                <Input id="name" placeholder="Your full name" value={name} onChange={setName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={setEmail} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                <Textarea id="message" placeholder="Tell us about your custom order or inquiry..." rows={5} value={message} onChange={setMessage} />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-lg h-12 font-medium shadow-lg" disabled={submitting}>Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}