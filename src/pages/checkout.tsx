'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'

interface Props {
  submitOrder: () => void
  renderNameField: () => void
  renderEmailField: () => void
  renderAddressField: () => void
}

export function Checkout({ submitOrder, renderNameField, renderEmailField, renderAddressField }: Props) {
  const [formControl, setFormControl] = React.useState(undefined)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <Form onSubmit={submitOrder}>
        <FormField control={formControl} name="name" render={renderNameField} />
        <FormField control={formControl} name="email" render={renderEmailField} />
        <FormField control={formControl} name="address" render={renderAddressField} />
        <Button type="submit" variant="primary" size="lg" className="mt-6">Place Order</Button>
      </Form>
    </div>
  )
}