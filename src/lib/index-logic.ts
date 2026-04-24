export function onDomainQueryChange(event: { target: unknown }): void {
  const target = event.target as HTMLInputElement;
  if (target && typeof target.value === 'string') {
    localStorage.setItem('home_domainQuery', target.value);
  }
}

export function onSearchDomain(event: { preventDefault(): void }): void {
  event.preventDefault();
  const query = localStorage.getItem('home_domainQuery') || '';
  if (query.trim()) {
    window.location.href = `/domains?search=${encodeURIComponent(query.trim())}`;
  } else {
    window.alert('Please enter a domain name to search.');
  }
}

export function onToggleBilling(checked: boolean): void {
  localStorage.setItem('home_isYearly', String(checked));
  window.dispatchEvent(new CustomEvent('billing-plan-changed', { detail: { isYearly: checked } }));
}
