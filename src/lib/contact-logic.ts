export function submitForm(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const data = new FormData(form)
  
  fetch('/api/contact', { 
    method: 'POST', 
    body: data 
  }).then(async (response) => {
    if (response.ok) {
      window.alert('Thank you for your message! We\'ll get back to you within 24 hours about your custom floral design.')
      form.reset()
    } else {
      throw new Error('Server error')
    }
  }).catch(() => {
    window.alert('Something went wrong sending your message. Please try again or call us at (555) 123-FLOWERS.')
  })
}
