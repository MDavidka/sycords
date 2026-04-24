export function toggleDarkMode(event: { preventDefault(): void; currentTarget: HTMLInputElement }): void {
  event.preventDefault()
  const isDark = event.currentTarget.checked
  if (isDark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('dark-mode', '1')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.removeItem('dark-mode')
  }
}
