export function submitContact(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const data = new FormData(form)
  fetch('/api/contact', { 
    method: 'POST', 
    body: data 
  }).then(async (res) => {
    if (res.ok) {
      window.alert('Thank you for your message! We will get back to you within 24 hours.')
      form.reset()
    } else {
      throw new Error('Submission failed')
    }
  }).catch(() => {
    window.alert('Something went wrong. Please try again.')
  })
}

export function openLiveChat(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.open('https://livechat.example.com', '_blank', 'width=400,height=600')
}

export function callSales(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = 'tel:+15551234567'
}

export function createSupportTicket(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/support/tickets/new'
}
