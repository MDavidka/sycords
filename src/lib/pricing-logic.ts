export function orderStarter(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/checkout?plan=starter'
}

export function orderPro(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/checkout?plan=pro'
}

export function orderEnterprise(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/contact?plan=enterprise'
}
