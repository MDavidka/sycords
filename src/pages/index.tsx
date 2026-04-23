import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function Home() {

  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-5xl font-bold tracking-tight">Lightning-Fast Hosting</CardTitle>
          <CardDescription className="text-xl mt-4 max-w-2xl mx-auto">Deploy your sites in seconds. Scale to millions. 99.99% uptime, enterprise-grade security, and global edge network.</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8">Get Started Free</Button>
          <Button variant="outline" size="lg" className="text-lg px-8">View Plans</Button>
        </CardContent>
      </Card>
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">Everything You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-center">Blazing Speed</h3>
              <p className="text-muted-foreground text-center">Global CDN, NVMe storage, and optimized servers deliver sub-50ms load times.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-center">Ironclad Security</h3>
              <p className="text-muted-foreground text-center">DDoS protection, WAF, free SSL, and daily malware scans keep your sites safe.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-center">99.99% Uptime</h3>
              <p className="text-muted-foreground text-center">Enterprise-grade infrastructure with 24/7 monitoring and instant failover.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Trusted by 50K+ Teams</CardTitle>
          <CardDescription>Join companies and developers who trust our platform.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-8 justify-center py-8">
          <div className="text-2xl opacity-60 hover:opacity-100 transition-all">🚀</div>
          <div className="text-2xl opacity-60 hover:opacity-100 transition-all">📱</div>
          <div className="text-2xl opacity-60 hover:opacity-100 transition-all">⚡</div>
          <div className="text-2xl opacity-60 hover:opacity-100 transition-all">🎨</div>
        </CardContent>
      </Card>
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">Start with the Perfect Plan</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 border-primary/20 relative overflow-hidden group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <span>Starter</span>
                <Badge variant="secondary">Most Popular</Badge>
              </CardTitle>
              <h1 className="text-5xl font-black">$5</h1>
              <p className="text-2xl text-muted-foreground font-light">/mo</p>
            </CardHeader>
            <CardContent className="space-y-4 pb-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>25GB NVMe Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Free SSL & CDN</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              <Button className="w-full">Choose Starter</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Pro</CardTitle>
              <h1 className="text-5xl font-black">$15</h1>
              <p className="text-2xl text-muted-foreground font-light">/mo</p>
            </CardHeader>
            <CardContent className="space-y-4 pb-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>100GB NVMe Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Priority Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              <Button variant="outline" className="w-full">Choose Pro</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Enterprise</CardTitle>
              <h1 className="text-5xl font-black">$49</h1>
              <p className="text-2xl text-muted-foreground font-light">/mo</p>
            </CardHeader>
            <CardContent className="space-y-4 pb-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>500GB NVMe Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>24/7 Phone Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <Card className="text-center">
        <CardContent className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">Join thousands of developers building the future.</p>
          <Button size="lg" className="text-lg px-12">Start Your Free Trial</Button>
        </CardContent>
      </Card>
    </main>
  )
}
