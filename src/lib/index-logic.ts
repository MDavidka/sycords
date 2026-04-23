export function toggleCareTips(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Plant care tips expanded! Check the accordion below for watering, light, and humidity tips.')
}

export function addToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]') as Array<{ name: string; price: number }>
  const plantNames = ['Monstera Deliciosa', 'Fiddle Leaf Fig', 'Snake Plant']
  const plantPrices = [29, 45, 19]
  const randomPlant = plantNames[Math.floor(Math.random() * 3)]
  const randomPrice = plantPrices[Math.floor(Math.random() * 3)]
  cart.push({ name: randomPlant, price: randomPrice })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert(`${randomPlant} added to cart! (${randomPrice})`)
}
