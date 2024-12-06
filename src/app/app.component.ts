import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { NavbarComponent } from './barra/navbar/navbar.component';
import { FooterComponent } from './barra/footer/footer.component';
import { ContactoComponent } from "./menu/contacto/contacto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule, ContactoComponent], // Solo importa RouterModule
  template: `
    <app-navbar></app-navbar>  <!-- Navbar fijo al principio de la página -->

    <main class="main-container">
      <router-outlet></router-outlet>  <!-- Aquí se cargarán los componentes según las rutas -->
      <app-contacto></app-contacto>
    </main>

    <app-footer></app-footer>  <!-- Footer al final de la página -->
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-portfolio';
}
