import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Sycords Support & Sales",
  description: "Get in touch with the Sycords team for support, enterprise inquiries, or technical questions.",
}

export default function ContactPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Tell us about your project</h2>
          <p className="text-pretty text-muted-foreground">Whether you're troubleshooting a deployment or looking for a custom enterprise contract, our engineering team is here to help.</p>
          
        </div>
        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="What can we help with?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Tell us more..." rows={6} required />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
      </form>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Before reaching out, you might find your answer here.</p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left text-base">Where can I find the documentation?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Our comprehensive documentation is available at docs.sycords.dev, covering everything from initial setup to advanced edge middleware configuration.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base">Do you offer migration assistance?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Yes! For users upgrading to our Team or Enterprise plans, we offer white-glove migration services to ensure zero downtime during your transition to Sycords.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base">How fast is your support response time?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Hobby users receive best-effort community support. Pro users typically receive responses within 12 hours. Team and Enterprise users get guaranteed 1-hour response times for critical issues.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
    </>
  )
}
