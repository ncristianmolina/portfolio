import { Component } from '@angular/core';
import { HiverhComponent } from './hiverh.component';
import { OtherWorkComponent } from './other-work.component';
@Component({
  selector: 'app-projects', standalone: true,
  imports: [HiverhComponent, OtherWorkComponent],
  templateUrl: './projects.component.html', styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
