'use client'

import { Button } from '@/components/ui/button'

export function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bloom & Petals</h1>
      <p className="text-lg mb-8">Fresh flowers delivered to your doorstep.</p>
      <Button variant="primary" size="lg" asChild>
        <a href="/shop" className="text-white">Shop Now</a>
      </Button>
    </div>
  )
}