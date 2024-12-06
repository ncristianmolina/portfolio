import { Routes } from '@angular/router';
import { HomeComponent } from './menu/home/home.component';
import { AboutmeComponent } from './menu/aboutme/aboutme.component';
import { ProjectsComponent } from './menu/projects/projects.component';
import { EducationComponent } from './menu/education/education.component';
import { ContactoComponent } from './menu/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'aboutme', component: AboutmeComponent }, // Ruta para "Sobre mí"
  { path: 'projects', component: ProjectsComponent }, // Ruta para "Proyectos"
  { path: 'education', component: EducationComponent }, // Ruta para "Educación"
  { path: 'contacto', component: ContactoComponent }, // Ruta para "Contacto"
  { path: '**', redirectTo: '' }, // Redirige a la página principal si la ruta no existe
];
