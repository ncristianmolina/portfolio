import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnDestroy {
  state: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  private request?: AbortController;

  async submit(event: Event, form: HTMLFormElement): Promise<void> {
    event.preventDefault();
    if (this.state === 'sending' || !form.reportValidity()) return;

    const body = new FormData(form);
    this.state = 'sending';
    const request = new AbortController();
    this.request = request;
    const timeout = setTimeout(() => request.abort(), 20000);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
        signal: request.signal,
      });
      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      this.state = 'success';
    } catch {
      this.state = 'error';
    } finally {
      clearTimeout(timeout);
      this.request = undefined;
    }
  }

  ngOnDestroy(): void {
    this.request?.abort();
  }
}
