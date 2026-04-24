export function togglePriceUnder50(checked: boolean): void {
  localStorage.setItem('priceUnder50', checked.toString())
}

export function togglePrice50to100(checked: boolean): void {
  localStorage.setItem('price50to100', checked.toString())
}

export function togglePriceOver100(checked: boolean): void {
  localStorage.setItem('priceOver100', checked.toString())
}

export function toggleFilterRoses(checked: boolean): void {
  localStorage.setItem('filterRoses', checked.toString())
}

export function toggleFilterTulips(checked: boolean): void {
  localStorage.setItem('filterTulips', checked.toString())
}

export function toggleFilterLilies(checked: boolean): void {
  localStorage.setItem('filterLilies', checked.toString())
}

export function clearFilters(): void {
  localStorage.removeItem('priceUnder50')
  localStorage.removeItem('price50to100')
  localStorage.removeItem('priceOver100')
  localStorage.removeItem('filterRoses')
  localStorage.removeItem('filterTulips')
  localStorage.removeItem('filterLilies')
  localStorage.removeItem('occasionFilter')
  localStorage.removeItem('sort')
  window.alert('Filters cleared!')
}

export function addToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({
    id: Date.now(),
    name: 'Flower Bouquet',
    price: 89,
    quantity: 1
  })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Added to cart!')
}
