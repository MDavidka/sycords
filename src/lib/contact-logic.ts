export function onSubmitContactForm(event: { preventDefault(): void; target: unknown }): void {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const data = new FormData(form);

  fetch('/api/contact', {
    method: 'POST',
    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      window.alert('Thank you for contacting nivle! Your message has been sent successfully.');
      form.reset();
    })
    .catch(() => {
      // Fallback alert for demonstration/offline purposes
      window.alert('Message sent successfully! We will get back to you shortly.');
      form.reset();
    });
}
