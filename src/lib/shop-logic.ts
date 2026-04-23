export function addToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]') as Array<{id: string, name: string, price: number}>
  const productId = `plant-${Date.now()}`
  const product = {
    id: productId,
    name: 'Selected Plant',
    price: 25
  }
  cart.push(product)
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Added to cart!')
}
