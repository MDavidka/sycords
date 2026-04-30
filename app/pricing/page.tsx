import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans - Sycords Hosting",
  description: "Flexible hosting plans from free to enterprise. Pay for what you use.",
}

export default function PricingPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pricing built for every stage</h2>
          
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Hobby</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight"></span>
                <span className="text-sm text-muted-foreground">mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1 project</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />100GB bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Basic monitoring</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="#">Choose plan</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ring-2 ring-primary shadow-xl shadow-primary/10 scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge>Most popular</Badge></div>
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight"></span>
                <span className="text-sm text-muted-foreground">mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Unlimited projects</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />1TB bandwidth</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Advanced monitoring</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Team features</li>
              </ul>
              <Button asChild variant="default" className="mt-6 w-full"><Link href="#">Choose plan</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">Contact</span>
                <span className="text-sm text-muted-foreground">us</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Custom everything</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Dedicated support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Private infrastructure</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="#">Choose plan</Link></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left text-base">What happens when I hit my bandwidth limit?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Sites continue serving with reduced priority. Upgrade anytime to lift limits instantly.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base">Can I use my own domain?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Yes! Custom domains with automatic SSL certificates. DNS setup takes 2 minutes.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base">How fast are deployments?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Average 148ms from git push to live site. Preview deploys in under 30 seconds.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
    </>
  )
}
