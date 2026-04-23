'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Props {
  setQuantity: (value: unknown) => void
  addToCart: () => void
}

export function ProductDetail({ setQuantity, addToCart }: Props) {
  const [quantity, setQuantity] = React.useState(undefined)

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src="/images/rose.jpg" alt="Product Image" className="w-full md:w-1/2 h-64 object-cover rounded-md" />
      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-semibold mb-2">Red Rose Bouquet</h2>
        <p className="text-lg mb-4">$25.00</p>
        <p className="mb-6">A beautiful bouquet of fresh red roses, perfect for any occasion.</p>
        <div className="flex items-center space-x-4 mb-6">
          <Input type="number" placeholder="Quantity" value={quantity} onChange={setQuantity} className="w-20" />
          <Button variant="primary" size="lg" onClick={addToCart}>Add to Cart</Button>
        </div>
        <Button variant="outline" size="lg" asChild>
          <a href="/shop" className="text-primary">Continue Shopping</a>
        </Button>
      </div>
    </div>
  )
}