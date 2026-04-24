export async function onSubmitForm(event: { preventDefault(): void; target: unknown }): Promise<void> {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const data = new FormData(form);

  try {
    await fetch('/api/contact', { 
      method: 'POST', 
      body: data 
    });
    window.alert('Thank you for your message. Our team will get back to you within 24 hours.');
    form.reset();
  } catch (error) {
    window.alert('Something went wrong while sending your message. Please try again later.');
  }
}

export function onSearch(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.alert('Searching knowledge base... (This is a mock implementation)');
}

export function onStartChat(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.alert('Live chat is initializing. An agent will be with you shortly.');
}
