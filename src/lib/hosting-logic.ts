export function onSelectBasicPlan(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.setItem('selectedPlan', 'basic')
  window.location.href = '/contact?department=Sales&plan=basic'
}

export function onSelectProPlan(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.setItem('selectedPlan', 'pro')
  window.location.href = '/contact?department=Sales&plan=pro'
}

export function onSelectEnterprisePlan(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.setItem('selectedPlan', 'enterprise')
  window.location.href = '/contact?department=Sales&plan=enterprise'
}
