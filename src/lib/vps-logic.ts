export function onCpuChange(value: number[]): void {
  if (value && value.length > 0) {
    localStorage.setItem('vps-cpu', value[0].toString())
    window.dispatchEvent(new Event('vps-specs-changed'))
  }
}

export function onRamChange(value: number[]): void {
  if (value && value.length > 0) {
    localStorage.setItem('vps-ram', value[0].toString())
    window.dispatchEvent(new Event('vps-specs-changed'))
  }
}

export function onStorageChange(value: number[]): void {
  if (value && value.length > 0) {
    localStorage.setItem('vps-storage', value[0].toString())
    window.dispatchEvent(new Event('vps-specs-changed'))
  }
}

export function onDeploy(event: { preventDefault(): void }): void {
  event.preventDefault()
  
  const cpu = localStorage.getItem('vps-cpu') || '1'
  const ram = localStorage.getItem('vps-ram') || '2'
  const storage = localStorage.getItem('vps-storage') || '50'
  
  window.alert(`Provisioning server with ${cpu} Cores, ${ram}GB RAM, and ${storage}GB NVMe Storage. Redirecting to checkout...`)
  window.location.href = '/checkout'
}
