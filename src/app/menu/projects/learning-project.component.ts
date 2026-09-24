import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-learning-project', standalone: true,
  template: `
    <article><div class="top"><span class="symbol" aria-hidden="true">{{ symbol }}</span><span class="kind">Aprendizaje / {{ area }}</span></div>
    <h3>{{ title }}</h3><p>{{ description }}</p>
    <ul class="tags">@for (technology of technologies; track technology) { <li>{{ technology }}</li> }</ul>
    <a class="text-link" [href]="repository" target="_blank" rel="noopener noreferrer" [attr.aria-label]="'Ver código de ' + title + ' en GitHub (nueva pestaña)'">Ver código <span aria-hidden="true">↗</span></a></article>
  `,
  styles: `
    :host{display:block;height:100%}article{height:100%;display:flex;flex-direction:column;padding:26px;border:1px solid var(--line);border-radius:8px}
    .top{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-bottom:24px}.symbol{color:var(--accent);font:1.7rem monospace}.kind{font-size:.65rem;color:var(--muted)}
    p{font-size:.86rem;margin-top:12px}.tags{margin-bottom:14px}.text-link{margin-top:auto;align-self:start}
    @media(min-width:768px){article{padding:30px}}
  `,
})
export class LearningProjectComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input({ required: true }) repository = '';
  @Input({ required: true }) area = '';
  @Input() symbol = '';
  @Input() technologies: string[] = [];
}
