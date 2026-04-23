export function onSubmit(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const name = (formData.get('name') as string)?.trim()
  const email = formData.get('email') as string
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !message) {
    window.alert('Please fill in all fields.')
    return
  }

  if (!email.includes('@')) {
    window.alert('Please enter a valid email address.')
    return
  }

  formData.append('source', 'contact-form')

  fetch('/api/contact', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Submission failed')
      }
      window.alert('Thank you! Your message has been sent. We\'ll get back to you soon.')
      form.reset()
    })
    .catch(() => {
      window.alert('Sorry, something went wrong. Please try again.')
    })
}
