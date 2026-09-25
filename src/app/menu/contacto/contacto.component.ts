import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from './contact-form.component';
@Component({
  selector: 'app-contacto', standalone: true,
  imports: [RouterLink, ContactFormComponent],
  templateUrl: './contacto.component.html', styleUrl: './contacto.component.css',
})
export class ContactoComponent {}
