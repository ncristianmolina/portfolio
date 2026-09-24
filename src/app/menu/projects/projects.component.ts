import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { HiverhComponent } from './hiverh.component';
import { LearningProjectComponent } from './learning-project.component';
@Component({
  selector: 'app-projects', standalone: true,
  imports: [RouterLink, HiverhComponent, LearningProjectComponent],
  templateUrl: './projects.component.html', styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
