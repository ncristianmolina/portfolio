import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule], // Importa `CommonModule` para usar directivas como `ngIf` y `ngFor`
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  currentImage: string | null = null; // Para almacenar la imagen del certificado

  // Abre el modal con la imagen del certificado
  openModal(imageSrc: string): void {
    this.currentImage = imageSrc; // Asigna la ruta de la imagen
    const modal = document.querySelector('.modal') as HTMLElement;
    modal.style.display = 'flex';
  }

  // Cierra el modal si se hace clic fuera de la imagen o si presiona la tecla ESC
  closeModal(event: Event): void {
    const target = event.target as HTMLElement;

    // Cierra el modal si se hace clic fuera de la imagen o en el botón cerrar
    if (target.classList.contains('modal') || target.classList.contains('close-btn')) {
      const modal = document.querySelector('.modal') as HTMLElement;
      modal.style.display = 'none';
      this.currentImage = null; // Limpia la imagen actual
    }
  }

  // Cierra el modal si se presiona la tecla ESC
  handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      const modal = document.querySelector('.modal') as HTMLElement;
      modal.style.display = 'none';
      this.currentImage = null; // Limpia la imagen actual
    }
  }

  // Escuchar el evento de la tecla ESC
  ngOnInit(): void {
    document.addEventListener('keydown', this.handleEscapeKey.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleEscapeKey.bind(this));
  }
}
