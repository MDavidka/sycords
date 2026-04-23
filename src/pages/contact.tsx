'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'

interface Props {
  submitContact: () => void
  renderNameField: () => void
  renderEmailField: () => void
  renderMessageField: () => void
}

export function ContactUs({ submitContact, renderNameField, renderEmailField, renderMessageField }: Props) {
  const [formControl, setFormControl] = React.useState(undefined)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <Form onSubmit={submitContact}>
        <FormField control={formControl} name="name" render={renderNameField} />
        <FormField control={formControl} name="email" render={renderEmailField} />
        <FormField control={formControl} name="message" render={renderMessageField} />
        <Button type="submit" variant="primary" size="lg" className="mt-6">Send Message</Button>
      </Form>
    </div>
  )
}