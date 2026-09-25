import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let fixture: ComponentFixture<ContactFormComponent>;
  let form: HTMLFormElement;
  let fetchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ContactFormComponent] }).compileComponents();
    fixture = TestBed.createComponent(ContactFormComponent);
    fixture.detectChanges();
    form = fixture.nativeElement.querySelector('form');
    (form.elements.namedItem('name') as HTMLInputElement).value = 'Visitante';
    (form.elements.namedItem('email') as HTMLInputElement).value = 'visitante@example.com';
    (form.elements.namedItem('message') as HTMLTextAreaElement).value = 'Quiero conversar sobre un proyecto.';
    fetchSpy = spyOn(window, 'fetch');
  });

  it('intercepts submission, waits for confirmation and prevents duplicate requests', async () => {
    let finish!: (response: Response) => void;
    fetchSpy.and.returnValue(new Promise<Response>(resolve => finish = resolve));
    const event = new Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(event);
    fixture.detectChanges();

    expect(event.defaultPrevented).toBeTrue();
    expect(form.querySelector('button')!.disabled).toBeTrue();
    expect(form.querySelector('[role="status"]')!.textContent).not.toContain('éxito');
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [url, options] = fetchSpy.calls.mostRecent().args;
    expect(url).toBe('https://formspree.io/f/xnnnnlzg');
    expect(options.method).toBe('POST');
    expect(options.headers.Accept).toBe('application/json');
    expect((options.body as FormData).get('email')).toBe('visitante@example.com');
    expect((options.body as FormData).get('name')).toBe('Visitante');
    expect((options.body as FormData).get('message')).toContain('proyecto');

    finish(new Response('{}', { status: 200 }));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(form.querySelector('[role="status"]')!.textContent).toContain('¡Mensaje enviado con éxito!');
    expect((form.elements.namedItem('message') as HTMLTextAreaElement).value).toBe('');
    expect(form.querySelector('button')!.disabled).toBeFalse();
  });

  it('keeps the message after an HTTP failure and allows retry', async () => {
    fetchSpy.and.resolveTo(new Response('{}', { status: 422 }));
    await fixture.componentInstance.submit(new Event('submit'), form);
    fixture.detectChanges();
    expect(form.querySelector('[role="alert"]')!.textContent).toContain('No pudimos confirmar el envío');
    expect((form.elements.namedItem('message') as HTMLTextAreaElement).value).toContain('proyecto');
    expect(form.querySelector('button')!.disabled).toBeFalse();

    fetchSpy.and.resolveTo(new Response('{}', { status: 200 }));
    await fixture.componentInstance.submit(new Event('submit'), form);
    fixture.detectChanges();
    expect(form.querySelector('[role="alert"]')!.textContent).toBe('');
    expect(fixture.componentInstance.state).toBe('success');
  });

  it('shows an error, never success, when the network fails', async () => {
    fetchSpy.and.rejectWith(new TypeError('Failed to fetch'));
    await fixture.componentInstance.submit(new Event('submit'), form);
    fixture.detectChanges();
    expect(fixture.componentInstance.state).toBe('error');
    expect(form.querySelector('[role="status"]')!.textContent).toBe('');
    expect((form.elements.namedItem('email') as HTMLInputElement).value).toBe('visitante@example.com');
  });

  it('does not send an invalid form', async () => {
    (form.elements.namedItem('email') as HTMLInputElement).value = 'invalid';
    const event = new Event('submit', { cancelable: true });
    await fixture.componentInstance.submit(event, form);
    expect(event.defaultPrevented).toBeTrue();
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(fixture.componentInstance.state).toBe('idle');
  });
});
