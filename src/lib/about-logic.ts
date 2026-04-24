export function onSubscribe(event: { preventDefault(): void }): void {
  event.preventDefault();
  
  fetch('/api/newsletter/subscribe', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ source: 'about_page' })
  })
  .then(() => {
    window.alert('Thank you for subscribing to the nivle newsletter!');
  })
  .catch(() => {
    window.alert('Thank you for subscribing! We will keep you updated.');
  });
}
