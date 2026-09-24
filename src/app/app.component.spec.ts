import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('Portfolio navigation', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppComponent],
    providers: [provideRouter(routes)],
  }));

  it('redirects legacy project URLs to the complete portfolio', async () => {
    const harness = await RouterTestingHarness.create('/projects');
    const page = harness.routeNativeElement!;
    expect(page.querySelectorAll('h1').length).toBe(1);
    expect(page.querySelectorAll('#contacto').length).toBe(1);
    expect(page.querySelector('#projects')?.textContent).toContain('TurnApp');
    expect(page.querySelector('#experiencia')?.textContent).toContain('Rubicom');
  });

  it('provides valid in-page destinations and two real CV downloads', async () => {
    const harness = await RouterTestingHarness.create('/');
    const page = harness.routeNativeElement!;
    for (const link of Array.from(page.querySelectorAll<HTMLAnchorElement>('a[href*="#"]'))) {
      expect(page.querySelector('#' + link.getAttribute('href')!.split('#')[1])).withContext(link.outerHTML).not.toBeNull();
    }
    const downloads = page.querySelectorAll<HTMLAnchorElement>('a[download]');
    expect(downloads.length).toBe(2);
    downloads.forEach(link => expect(link.getAttribute('href')).toBe('assets/cv/CV_Cristian_Nahuel_Molina.pdf'));
    expect(page.querySelector('form')).toBeNull();
  });
});
