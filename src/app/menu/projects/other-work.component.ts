import { Component } from '@angular/core';

@Component({
  selector: 'app-other-work',
  standalone: true,
  template: `
    <aside aria-label="Otros trabajos web">
      <details>
        <summary>Otros trabajos web</summary>
        <ul>
          <li><a class="text-link" href="https://traiani-agrimensura.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visitar Traiani Agrimensura (nueva pestaña)">Traiani Agrimensura <span aria-hidden="true">↗</span></a><p>Sitio web que desarrollé para un profesional de agrimensura, con servicios, equipamiento y vías de contacto.</p></li>
          <li><a class="text-link" href="https://github.com/ncristianmolina/blogPhp" target="_blank" rel="noopener noreferrer" aria-label="Ver repositorio de Blog PHP (nueva pestaña)">Blog PHP · Aprendizaje <span aria-hidden="true">↗</span></a><p>Repositorio de aprendizaje con ejercicios de PHP y pruebas de conexión a MySQL.</p></li>
        </ul>
      </details>
    </aside>
  `,
  styles: `
    :host{display:block;margin-top:28px}
    details{border-block:1px solid var(--line)}
    summary{cursor:pointer;padding:16px 4px;color:var(--muted);font-size:.875rem;min-height:48px}
    ul{list-style:none;padding:0;margin:0}
    li{padding:8px 4px 20px}
    li+li{border-top:1px solid var(--line);padding-top:16px}
    .text-link{font-size:.875rem}p{font-size:.875rem;max-width:75ch;margin-top:4px}
  `,
})
export class OtherWorkComponent {}
