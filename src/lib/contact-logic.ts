```typescript
export function onSubmit(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const data = Object.fromEntries(formData) as {
    name: string
    email: string
    message: string
    orderDetails?: string
  }

  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    window.alert('Please fill in name, email, and message.')
    return
  }

  const button = form.querySelector('button[type="submit"]') as HTMLButtonElement
  const originalText = button.textContent
  button.disabled = true
  button.textContent = 'Sending...'

  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(() => {
    window.alert('Thank you! Your message has been sent. We\'ll get back to you within 24 hours.')
    form.reset()
  })
  .catch(() => {
    window.alert('Sorry, something went wrong. Please try again.')
  })
  .finally(() => {
    button.disabled = false
    button.textContent = originalText || 'Send Message'
  })
}
```