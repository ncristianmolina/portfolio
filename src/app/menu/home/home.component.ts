import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ExperienceComponent } from '../experience/experience.component';
@Component({
  selector: 'app-home', standalone: true,
  imports: [RouterLink, AboutmeComponent, ProjectsComponent, EducationComponent, ContactoComponent, ExperienceComponent],
  templateUrl: './home.component.html', styleUrl: './home.component.css',
})
export class HomeComponent {}
