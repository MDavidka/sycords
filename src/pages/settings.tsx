'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

interface Props {
  toggleAutoClick: () => void
  setClickSpeed: (value: unknown) => void
  resetGame: () => void
  goHome: () => void
}

export function Settings({ toggleAutoClick, setClickSpeed, resetGame, goHome }: Props) {
  const [autoClickEnabled, setAutoClickEnabled] = React.useState(false)
  const [clickSpeed, setClickSpeed] = React.useState(undefined)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h2 className="text-3xl font-semibold mb-6">Game Settings</h2>
      <div className="w-full max-w-md space-y-4">
        <Label htmlFor="autoClick">Auto Clicker</Label>
        <Switch id="autoClick" checked={autoClickEnabled} onCheckedChange={toggleAutoClick} />
        <Label htmlFor="clickSpeed">Click Speed (ms)</Label>
        <Input id="clickSpeed" type="number" value={clickSpeed} onChange={setClickSpeed} className="w-full" />
        <Button variant="default" size="sm" onClick={resetGame}>Reset Game</Button>
      </div>
      <Button variant="outline" size="sm" onClick={goHome}>Back to Game</Button>
    </div>
  )
}