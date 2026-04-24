export function openLiveChat(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.open('https://livechat.hosting.com', '_blank', 'noopener,noreferrer')
}

export function submitTicket(event: { preventDefault(): void }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  fetch('/api/support/tickets', {
    method: 'POST',
    body: formData
  }).then(async (response) => {
    if (response.ok) {
      window.alert('Ticket submitted successfully! We will respond within 2 hours.')
      form.reset()
    } else {
      throw new Error('Submission failed')
    }
  }).catch(() => {
    window.alert('Something went wrong. Please try again.')
  })
}

export function resetTicketForm(event: { preventDefault(): void }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement | null
  if (form) {
    form.reset()
  }
}
