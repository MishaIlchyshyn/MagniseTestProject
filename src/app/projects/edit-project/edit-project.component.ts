import { Component, OnInit } from '@angular/core';
import { FakeProjectsProvider } from 'app/communication/services/fake-projects-provider';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'communication';
import { ProjectsProvider } from '../../communication/services/projects-provider';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  project: IProject = {id: null, name: null, description: null, image: null, issues: []};


  constructor(private dataprojectsService : ProjectsProvider, private route: ActivatedRoute, private spinner: NgxSpinnerService, private _location: Location) { 
    
  }

  ngOnInit() {
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      this.dataprojectsService.getItemById(Number(params.id)).subscribe(project => {
        this.project = project;
        this.spinner.hide();
      });
    });
  };

  saveProject() {
    this.spinner.show();
    this.dataprojectsService.updateItem(this.project).subscribe(project => {
      this.spinner.hide();
      alert("Проект успішно відредаговано!");
      this.gotToProjects();
    },
    error => {
      alert(error);
    })
  }

  gotToProjects() {
    this._location.back();
  }

}
