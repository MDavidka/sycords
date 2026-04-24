export function onStartChat(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.alert("Connecting you to the next available support agent...");
}

export async function onSubmitContactForm(event: { preventDefault(): void, target: unknown }): Promise<void> {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const data = new FormData(form);
  
  try {
    await fetch('/api/contact', {
      method: 'POST',
      body: data
    });
    window.alert("Message Sent! Thanks for reaching out! We'll get back to you within 24 hours.");
    form.reset();
  } catch (error) {
    window.alert("Something went wrong. Please try again.");
  }
}

export function onChangeFirstName(event: { target: { value: string } }): string {
  const value = event.target.value;
  sessionStorage.setItem('contact_firstName', value);
  return value;
}

export function onChangeLastName(event: { target: { value: string } }): string {
  const value = event.target.value;
  sessionStorage.setItem('contact_lastName', value);
  return value;
}

export function onChangeEmail(event: { target: { value: string } }): string {
  const value = event.target.value;
  sessionStorage.setItem('contact_email', value);
  return value;
}

export function onChangeSubject(value: string): string {
  sessionStorage.setItem('contact_subject', value);
  return value;
}

export function onChangeMessage(event: { target: { value: string } }): string {
  const value = event.target.value;
  sessionStorage.setItem('contact_message', value);
  return value;
}
