import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HomeComponent } from './menu/home/home.component';

// Preserve old shared URLs while keeping a single, complete portfolio.
const sectionRedirect = (fragment: string) => () =>
  inject(Router).createUrlTree(['/'], { fragment });

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutme', redirectTo: sectionRedirect('aboutme') },
  { path: 'projects', redirectTo: sectionRedirect('projects') },
  { path: 'education', redirectTo: sectionRedirect('education') },
  { path: 'contacto', redirectTo: sectionRedirect('contacto') },
  { path: 'experiencia', redirectTo: sectionRedirect('experiencia') },
  { path: '**', redirectTo: '' },
];
