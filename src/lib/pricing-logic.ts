export function checkoutStarter(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/checkout?plan=starter'
}

export function checkoutPro(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/checkout?plan=pro'
}
