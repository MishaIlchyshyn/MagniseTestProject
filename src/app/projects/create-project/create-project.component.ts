import { Component, OnInit } from '@angular/core';
import { IProject } from 'communication';
import { FakeProjectsProvider } from '../../communication/services/fake-projects-provider';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  project: IProject = {id: null, name: null, description: null, image: null, issues: []};

  constructor(private dataprojectsService : FakeProjectsProvider) { }

  ngOnInit() {
  }

  addProject() {
    this.dataprojectsService.createItem(this.project).subscribe(project => {
      console.log(project);
    })
  }

}
