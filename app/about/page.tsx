import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn About Sycords: Our Story, Values & Expert Team",
  description: "Discover the story behind Sycords, our commitment to developer success, and meet the passionate team building the future of cloud hosting.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Ship something people remember.</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-pretty text-lg text-muted-foreground">At Sycords, we believe that deploying and scaling applications should be effortless. We're building the cloud platform that lets you focus on innovation, not infrastructure.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Meet the team</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Our diverse team of engineers, designers, and support specialists are dedicated to your success.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">JD</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">Jane Doe</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">CEO &amp; Co-founder</p>
          </div>
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">JS</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">John Smith</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">CTO &amp; Co-founder</p>
          </div>
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">EW</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">Emily White</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">Head of Product</p>
          </div>
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">DL</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">David Lee</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">Lead Solutions Architect</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          
          
          <p className="text-pretty text-muted-foreground">Since our inception, Sycords has been committed to fostering a robust and reliable hosting environment.</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Deployments</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">50,000+</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Years Combined Experience</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">10+</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">Trusted by teams everywhere</p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">AWS</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Cloudflare</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Google Cloud</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Stripe</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Turso</div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Be part of a platform that's built for developers, by developers.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="https://careers.sycords.com">Explore Careers</Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/contact">Contact Us</Link></Button>
        </div>
      </div>
    </section>
    </>
  )
}
