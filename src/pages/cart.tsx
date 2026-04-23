import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export function Cart() {
  const [promoCode, setPromoCode] = React.useState('')

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle>Shopping Cart</CardTitle>
        <CardDescription>Review your selected flowers and proceed to checkout</CardDescription>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌹</span>
              </div>
              <div>
                <h3 className="font-semibold">Red Roses Bouquet</h3>
                <p className="text-sm text-muted-foreground">12 stems, premium quality</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">-</Button>
              <span className="w-8 text-center font-mono">2</span>
              <Button variant="outline" size="sm">+</Button>
              <Button variant="ghost" size="sm" className="ml-2 h-8 w-8 p-0">✕</Button>
            </div>
            <div className="text-right ml-4">
              <p className="font-semibold">$59.98</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌺</span>
              </div>
              <div>
                <h3 className="font-semibold">Pink Orchid Arrangement</h3>
                <p className="text-sm text-muted-foreground">6 stems with greenery</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">-</Button>
              <span className="w-8 text-center font-mono">1</span>
              <Button variant="outline" size="sm">+</Button>
              <Button variant="ghost" size="sm" className="ml-2 h-8 w-8 p-0">✕</Button>
            </div>
            <div className="text-right ml-4">
              <p className="font-semibold">$42.00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-end justify-between pt-6 border-t">
          <div className="flex-1 max-w-sm">
            <Label>Promo Code</Label>
            <div className="flex mt-2">
              <Input placeholder="Enter promo code" value={promoCode} />
              <Button className="ml-2">Apply</Button>
            </div>
          </div>
          <div className="text-right space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>$101.98</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>$9.99</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>$8.16</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>$120.13</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end pt-6 border-t">
        <Button size="lg" className="min-w-[200px]">Proceed to Checkout</Button>
      </CardFooter>
    </Card>
  )
}
