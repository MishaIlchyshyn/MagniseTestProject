import { Component, OnInit } from '@angular/core';
import { IProject } from 'communication';
import { ProjectsProvider } from '../../communication/services/projects-provider';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  project: IProject = {id: null, name: null, description: null, image: null, issues: []};

  constructor(private dataprojectsService : ProjectsProvider, private spinner: NgxSpinnerService, private _location: Location) { }

  ngOnInit() {
  }

  addProject() {
    this.spinner.show();
    this.dataprojectsService.createItem(this.project).subscribe( item => {
      this.spinner.hide();
      alert("Проект успішно створено!");
      this._location.back();
    },
    error => {
      alert(error);
    });
  }

}
