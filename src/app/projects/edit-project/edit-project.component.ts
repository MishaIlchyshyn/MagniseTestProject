import { Component, OnInit } from '@angular/core';
import { FakeProjectsProvider } from 'app/communication/services/fake-projects-provider';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'communication';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  project: IProject = {id: null, name: null, description: null, image: null, issues: []};


  constructor(private dataprojectsService : FakeProjectsProvider, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.dataprojectsService.getItemById(params.id).subscribe(project => {
        this.project = project;
      });
    });
  };

  saveProject() {
    this.dataprojectsService.updateItem(this.project).subscribe(project => {
      console.log(project);
    })
  }

}
