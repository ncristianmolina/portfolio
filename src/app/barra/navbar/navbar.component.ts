import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false; // Estado para el menú hamburguesa
  isNavbarVisible = true; // Controla si el navbar es visible
  private lastScrollPosition = 0; // Almacena la última posición del scroll

  // Método para desplazarse a una sección
  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Método para alternar el menú hamburguesa
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Escuchar eventos de scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollPosition = window.scrollY;
    this.isNavbarVisible = currentScrollPosition < this.lastScrollPosition || currentScrollPosition < 10;
    this.lastScrollPosition = currentScrollPosition;
  }
}
