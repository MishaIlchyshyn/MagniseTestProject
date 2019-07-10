import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../project.model';
import { DataprojectsService } from '../data-projects.service';
import { IProject } from '../../communication/models/project';
import { FakeProjectsProvider } from '../../communication/services/fake-projects-provider';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projects: IProject[];

  constructor(private dataProjectsService: FakeProjectsProvider) { }

  ngOnInit() {
    this.dataProjectsService.getItems().subscribe(projects => {
      this.projects = projects;
    });
  }

  deleteProject(id) {
    this.dataProjectsService.deleteItem(id).subscribe(deleted => {
      if (deleted) {
        this.deleteItem(id);
      }
    });
  }
  
  deleteItem(id) {
    const index = this.projects.findIndex(project => project.id === id);
    this.projects.splice(index, 1);
  }

}
