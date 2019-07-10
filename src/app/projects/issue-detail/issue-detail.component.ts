import { Component, OnInit } from '@angular/core';
import { IssuesProvider } from '../../communication/services/issues-provider';
import { ActivatedRoute } from '@angular/router';
import { IIssue } from '../../communication/models/issue';
import { ProjectsProvider } from '../../communication/services/projects-provider';
import {Location} from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {

  issue: IIssue = {id: null, name: null, description: null, projectId: null, inProgress: null, created: null};

  projectId: number;

  constructor(private dataissuesService: IssuesProvider,
              private route: ActivatedRoute,
              private dataprojectService: ProjectsProvider,
              private _location: Location,
              private spinner: NgxSpinnerService
            ) {
              this.spinner.show();
    this.route.queryParams.subscribe(params => {     
      this.projectId = params.projectId;
      dataissuesService.getItemById(Number(params.id), Number(params.projectId)).subscribe(issue => {
        this.issue = issue; 
        this.spinner.hide();
      });
    });
  }

  ngOnInit() {
  }

  deleteIssue(id) {
    let result = confirm("Ви дійсно бажаєте видалити цю задачу?");
    if(result === true) {
      this.spinner.show();
    this.dataissuesService.deleteItem(Number(id), Number(this.projectId)).subscribe(deleted => {
       if (deleted) {
         this.spinner.hide();
         alert("Задачу успішно видалено!");
        this.goToProjectDetail();
       }
     });
    }
  }
  
  goToProjectDetail() {
    this._location.back();
  }

}
