'use client'

import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function Cart() {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Red Rose Bouquet</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$25.00</TableCell>
            <TableCell>$50.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-end mt-6">
        <Button variant="primary" size="lg" asChild>
          <a href="/checkout" className="text-white">Proceed to Checkout</a>
        </Button>
      </div>
    </div>
  )
}