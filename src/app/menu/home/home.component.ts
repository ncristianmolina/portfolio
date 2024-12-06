import { Component } from '@angular/core';
import { AboutmeComponent } from '../../menu/aboutme/aboutme.component';
import { ProjectsComponent } from '../../menu/projects/projects.component';
import { EducationComponent } from '../../menu/education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutmeComponent,
    ProjectsComponent,
    EducationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  // Método para hacer scroll suave a una sección por su ID
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Método para copiar el correo electrónico al portapapeles
  copyEmail(): void {
    const email = 'ncristian.molina@gmail.com';
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Opción para mostrar un mensaje al usuario (opcional)
    alert('Correo copiado: ' + email);
  }
}
