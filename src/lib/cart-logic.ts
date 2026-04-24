export function decrementQuantity(event: { preventDefault(): void }): void {
  const quantityEl = document.querySelector('[data-quantity="1"]') as HTMLDivElement;
  if (quantityEl) {
    const current = parseInt(quantityEl.textContent || '0', 10);
    if (current > 0) {
      quantityEl.textContent = (current - 1).toString();
      updateSubtotal();
    }
  }
}

export function incrementQuantity(event: { preventDefault(): void }): void {
  const quantityEl = document.querySelector('[data-quantity="1"]') as HTMLDivElement;
  if (quantityEl) {
    const current = parseInt(quantityEl.textContent || '0', 10);
    quantityEl.textContent = (current + 1).toString();
    updateSubtotal();
  }
}

export function removeItem(event: { preventDefault(): void }): void {
  const itemEl = document.querySelector('[data-item="1"]') as HTMLElement;
  if (itemEl) {
    itemEl.remove();
    updateSubtotal();
  }
}

export function decrementQuantity2(event: { preventDefault(): void }): void {
  const quantityEl = document.querySelector('[data-quantity="2"]') as HTMLDivElement;
  if (quantityEl) {
    const current = parseInt(quantityEl.textContent || '0', 10);
    if (current > 0) {
      quantityEl.textContent = (current - 1).toString();
      updateSubtotal();
    }
  }
}

export function incrementQuantity2(event: { preventDefault(): void }): void {
  const quantityEl = document.querySelector('[data-quantity="2"]') as HTMLDivElement;
  if (quantityEl) {
    const current = parseInt(quantityEl.textContent || '0', 10);
    quantityEl.textContent = (current + 1).toString();
    updateSubtotal();
  }
}

export function removeItem2(event: { preventDefault(): void }): void {
  const itemEl = document.querySelector('[data-item="2"]') as HTMLElement;
  if (itemEl) {
    itemEl.remove();
    updateSubtotal();
  }
}

export function applyPromo(event: { preventDefault(): void }): void {
  const promoInput = document.getElementById('promo') as HTMLInputElement;
  const errorEl = document.querySelector('[data-promo-error]') as HTMLElement;
  if (promoInput) {
    const code = promoInput.value.trim().toUpperCase();
    if (code === 'WELCOME10' || code === 'FLOWERS20') {
      updateSubtotal(true);
      if (errorEl) errorEl.remove();
    } else {
      if (!errorEl) {
        const badge = document.createElement('div');
        badge.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-destructive text-destructive-foreground';
        badge.textContent = 'Invalid promo code';
        badge.setAttribute('data-promo-error', '');
        promoInput.parentElement?.appendChild(badge);
      }
    }
  }
}

export function proceedToCheckout(event: { preventDefault(): void }): void {
  window.location.href = '/checkout';
}

function updateSubtotal(promoApplied = false): void {
  const subtotalEl = document.querySelector('[data-subtotal]') as HTMLSpanElement;
  const totalEl = document.querySelector('[data-total]') as HTMLSpanElement;
  if (subtotalEl && totalEl) {
    let subtotal = 0;
    const q1 = parseInt(document.querySelector('[data-quantity="1"]')?.textContent || '0', 10);
    const q2 = parseInt(document.querySelector('[data-quantity="2"]')?.textContent || '0', 10);
    subtotal += q1 * 49.99;
    subtotal += q2 * 39.99;
    
    if (promoApplied) {
      subtotal *= 0.9;
    }
    
    const shipping = subtotal > 0 ? 9.99 : 0;
    const total = subtotal + shipping;
    
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
  }
}
