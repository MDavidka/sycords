import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Have questions about our plants? Drop us a message or visit our store!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card >
            <CardHeader className="pb-4">
              <CardTitle >Send us a message</CardTitle>
            </CardHeader>
            <CardContent >
              <form action="/api/contact" method="POST" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your plant needs..." rows={5} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card >
              <CardHeader>
                <CardTitle>Visit Our Store</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.566614837299!2d-73.98731968459149!3d40.75889597932685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b311746f%3A0xd134e199a405a163!2sThe%20New%20York%20Botanical%20Garden!5e0!3m2!1sen!2sus!4v1635782345678!5m2!1sen!2sus" width="100%" height={250} style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-lg" />
                <div className="mt-4 text-center">
                  <p className="font-semibold text-lg mb-1">Green Thumb Nursery</p>
                  <p className="text-sm text-gray-500">123 Plant Street, Botanica City</p>
                </div>
              </CardContent>
            </Card>
            <Card >
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9AM - 6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10AM - 5PM</span>
                  </div>
                  <div className="flex justify-between text-red-600 dark:text-red-400 font-medium">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card className="mt-20">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div type="single" collapsible>
              <div value="shipping">
                <div>Do you ship plants?</div>
                <div>Yes! We offer nationwide shipping for most plants. Local pickup is also available at our store. Shipping times vary by plant type and destination.</div>
              </div>
              <div value="returns">
                <div>What is your return policy?</div>
                <div>We accept returns within 14 days for healthy plants. Please contact us first with photos of the issue. Shipping costs are non-refundable.</div>
              </div>
              <div value="care">
                <div>How do I care for my new plant?</div>
                <div>Each plant comes with detailed care instructions. Generally: water when top soil is dry, provide bright indirect light, and use well-draining soil.</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
