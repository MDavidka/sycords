import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ClockIcon, EnvelopeIcon, MailIcon, MapPinIcon, PaperAirplaneIcon, PhoneIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { submitForm } from '@/lib/contact-logic'

export function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Have questions about custom bouquets, delivery, or need floral design support? We're here to help.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <Card className="w-full">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <MailIcon className="h-6 w-6" />
              <div>Send Us a Message</div>
            </CardTitle>
            <CardDescription>Request a custom bouquet design or get help with your order.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" value={name} />
            </div>
            <div className="space-y-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" value={email} />
            </div>
            <div className="space-y-4">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" value={phone} />
            </div>
            <div className="space-y-4">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your custom bouquet request, occasion, colors, budget, or any questions..." rows={5} value={message} />
            </div>
            <div className="space-y-4">
              <Label htmlFor="photo">
                <div>Reference Photo (optional)</div>
                <p className="text-sm text-muted-foreground">Upload an inspiration photo for your custom design</p>
              </Label>
              <Input id="photo" type="file" accept="image/*" />
            </div>
            <Button className="w-full" onClick={submitForm}>
              <PaperAirplaneIcon className="h-4 w-4 mr-2" />
              <div>Send Message</div>
            </Button>
          </CardContent>
        </Card>
        <div className="space-y-8 lg:sticky lg:top-8 lg:h-fit">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                <div>Visit Our Store</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden border bg-muted">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.566614137963!2d-73.987319684593!3d40.748447979328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b311746f%3A0xd134e199a405a163!2sFlower%20Shop%20NYC!5e0!3m2!1sen!2sus!4v1690000000000" width="100%" height="100%" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-full" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <p className="font-medium">123 Flower Street</p>
                </div>
                <p className="text-sm text-muted-foreground">New York, NY 10001</p>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  <p className="font-medium">(555) 123-FLOWERS</p>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-primary" />
                  <p className="font-medium">hello@flowershop.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <div>Store Hours</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div>Monday - Friday</div>
                  <span className="font-medium">9AM - 7PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div>Saturday</div>
                  <span className="font-medium">10AM - 6PM</span>
                </div>
                <div className="flex justify-between text-sm text-destructive">
                  <div>Sunday</div>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <QuestionMarkCircleIcon className="h-6 w-6" />
            <div>Frequently Asked Questions</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="delivery">
              <AccordionTrigger>What are your delivery areas and times?</AccordionTrigger>
              <AccordionContent>We deliver same-day within 25 miles of our store (NYC area). Orders placed before 2PM weekdays ship same day. Weekend delivery available with 48hr notice. Nationwide shipping via FedEx for preserved arrangements.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="custom">
              <AccordionTrigger>Can you create custom bouquet designs?</AccordionTrigger>
              <AccordionContent>Absolutely! Use our contact form above with photos and details. Custom designs start at $75 with 3-5 day lead time. Rush orders welcome with 24hr notice (+50% premium).</AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>Fresh flowers are perishable - we guarantee 7 days of beauty. Contact us within 24hrs of delivery for quality issues. Store credit issued for valid claims. No refunds on custom designs.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="payment">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>All major credit cards, Apple Pay, Google Pay, PayPal, Venmo, and gift cards. 3% discount for cash payments at our physical store.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <div className="text-center mt-16 pt-16 border-t border-border">
        <div className="inline-flex bg-muted rounded-full p-1 mb-6">
          <div className="bg-background rounded-full px-6 py-2 text-sm font-medium">Ready to order?</div>
        </div>
        <Link className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 group" to="/shop">
          <div>Browse Our Flowers</div>
          <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
