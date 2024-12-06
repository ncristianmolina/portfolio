import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  copyEmail(): void {
    const email = "tuemail@dominio.com"; // Reemplaza con tu correo electrónico
    navigator.clipboard.writeText(email).then(() => {
      alert('Correo electrónico copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }
}
