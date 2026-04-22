'use client'

import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface Props {
  goHome: () => void
}

export function Stats({ goHome }: Props) {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h2 className="text-3xl font-semibold mb-6">Game Statistics</h2>
      <Table className="w-full max-w-md">
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cookies</TableCell>
            <TableCell>$state.cookieCount</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Clicks</TableCell>
            <TableCell>$state.totalClicks</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button variant="outline" size="sm" onClick={goHome}>Back to Game</Button>
    </div>
  )
}