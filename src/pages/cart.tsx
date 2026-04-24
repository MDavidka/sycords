import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, CalendarIcon, FlowerIcon, MinusIcon, PlusIcon, RoseIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { decrementQuantity, incrementQuantity, removeItem, decrementQuantity2, incrementQuantity2, removeItem2, applyPromo, proceedToCheckout } from '@/lib/cart-logic'

export function Cart() {
  const [promoCode, setPromoCode] = React.useState('')
  const [deliveryOpen, setDeliveryOpen] = React.useState(false)
  const [deliveryDate, setDeliveryDate] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card >
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
            <p className="text-muted-foreground text-sm">Review your items before checkout</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                  <RoseIcon className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">Rose Bouquet</p>
                  <p className="text-sm text-muted-foreground">$49.99</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={decrementQuantity}>
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <div className="w-8 text-center font-medium">$state.quantity</div>
                  <Button variant="ghost" size="sm" onClick={incrementQuantity}>
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" onClick={removeItem}>
                  <XMarkIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                  <FlowerIcon className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">Birthday Tulips</p>
                  <p className="text-sm text-muted-foreground">$39.99</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={decrementQuantity2}>
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <div className="w-8 text-center font-medium">$state.quantity2</div>
                  <Button variant="ghost" size="sm" onClick={incrementQuantity2}>
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" onClick={removeItem2}>
                  <XMarkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card >
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">$state.subtotal</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="font-medium">$state.shipping</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>$state.total</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="promo">Promo Code</Label>
                <div className="flex gap-2">
                  <Input id="promo" placeholder="Enter promo code" value={promoCode} onChange={setPromoCode} />
                  <Button size="sm" onClick={applyPromo}>Apply</Button>
                </div>
                <div variant="destructive">$state.promoError</div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery-date">Delivery Date</Label>
                <Popover open={deliveryOpen} onOpenChange={setDeliveryOpen}>
                  <PopoverTrigger>
                    <Button id="delivery-date" variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>$state.deliveryDate || 'Pick a delivery date'</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar mode="single" selected={deliveryDate} onSelect={setDeliveryDate} defaultMonth="new Date()" />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                <Link to="/shop">Continue Shopping</Link>
              </Button>
              <Button className="w-full" onClick={proceedToCheckout}>
                <Link to="/checkout">Proceed to Checkout →</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
