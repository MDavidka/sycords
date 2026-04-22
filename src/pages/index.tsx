'use client'

import { Button } from '@/components/ui/button'

interface Props {
  incrementCookie: () => void
  openSettings: () => void
}

export function CookieClicker({ incrementCookie, openSettings }: Props) {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Cookie Clicker</h1>
      <div className="flex flex-col items-center space-y-4">
        <Button variant="default" size="lg" onClick={incrementCookie}>🍪</Button>
        <p className="text-xl">$state.cookieCount</p>
        <Button variant="outline" size="sm" onClick={openSettings}>Settings</Button>
      </div>
    </div>
  )
}