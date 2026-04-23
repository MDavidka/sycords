'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { onSubmit } from '@/lib/contact-logic'

export function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [orderDetails, setOrderDetails] = React.useState('')
  const [submitting, setSubmitting] = React.useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Contact Us</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Have questions about custom orders, floral arrangements, or want to visit our shop? We're here to help!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="w-full">
            <CardHeader >
              <CardTitle >Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" value={name} onChange={setName} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={setEmail} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your inquiry or custom order..." value={message} onChange={setMessage} rows={5} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orderDetails">Order Details (optional)</Label>
                  <Textarea id="orderDetails" placeholder="Special instructions, delivery date, bouquet preferences..." value={orderDetails} onChange={setOrderDetails} rows={3} />
                </div>
                <Button type="submit" className="w-full" disabled={submitting} onClick={onSubmit}>$state.submitting ? 'Sending...' : 'Send Message'</Button>
              </form>
              <div className="pt-4">
                <div className="$state.submitStatus === 'success' ? 'text-green-600 bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800' : 'text-red-600 bg-red-50 border border-red-200 dark:bg-red-950 dark:border-red-800'">$state.submitStatus === 'success' ? 'Message sent successfully! We'll get back to you within 24 hours.' : $state.submitStatus === 'error' ? 'Failed to send message. Please try again.' : ''</div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card >
              <CardHeader>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="font-semibold text-rose-600">Blossom Haven Florist</div>
                  <p>123 Flower Street, Floral Park, CA 90210</p>
                  <p className="text-sm text-slate-500">Free parking available</p>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-rose-600">📞 (555) 123-FLOWERS</div>
                  <p className="text-sm">Mon-Fri 9AM-6PM | Sat 10AM-4PM</p>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden border">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.614715140907!2d-118.243683!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzExLjkiTiAxMTTCsDE0JzM3LjIiVw!5e0!3m2!1sen!2sus!4v1690000000000" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
              </CardContent>
            </Card>
            <Card >
              <CardHeader>
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between font-medium">
                    <span>Monday - Friday</span>
                    <span className="text-rose-600 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-rose-600 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-slate-500">Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card >
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div type="single" collapsible>
              <div value="delivery">
                <div>What are your delivery areas and times?</div>
                <div>We deliver locally within 20 miles of our shop Monday-Saturday. Same-day delivery available for orders placed before 1PM. Standard delivery window is 10AM-5PM.</div>
              </div>
              <div value="custom-orders">
                <div>How do custom orders work?</div>
                <div>Use our contact form above for custom requests! Include your budget, occasion, colors, and delivery date. We'll respond within 24 hours with options and pricing.</div>
              </div>
              <div value="payment">
                <div>What payment methods do you accept?</div>
                <div>We accept all major credit cards, Apple Pay, Google Pay, and cash on delivery/pickup. A 50% deposit is required for custom orders over $100.</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}