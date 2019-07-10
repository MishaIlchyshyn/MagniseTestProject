import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../../communication/models/project';
import { ProjectsProvider } from '../../communication/services/projects-provider';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: IProject = {id: null, name: null, description: null, image: null, issues: []};
  isError = false;

  constructor(private dataprojectService: ProjectsProvider,
              private route: ActivatedRoute,
              private _location: Location,
              private spinner: NgxSpinnerService) {
              this.spinner.show();
    this.route.queryParams.subscribe(params => {
      dataprojectService.getItemById(params.id).subscribe(project => {
        this.project = project;
        this.spinner.hide();
      },
      error => {
        this.isError = true;
      })
    })
  }

  ngOnInit() {
      
  }

  deleteProject() {
    let result = confirm("Ви дійсно бажаєте видалити цей проект?");
    if(result === true) {
      this.spinner.show();
      this.dataprojectService.deleteItem(this.project.id).subscribe(deleted => {
        if (deleted) {
          this.spinner.hide();
          alert("Проект успішно видалено!");
          this._location.back();
        }
      },
      error => {
        alert(error);
      });
    }    
  }

}
