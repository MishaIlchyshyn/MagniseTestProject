import { Component, OnInit } from '@angular/core';
import { IssuesProvider } from '../../communication/services/issues-provider';
import { IIssue } from '../../communication/models/issue';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsProvider } from '../../communication/services/projects-provider';
import {Location} from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-issue-create',
  templateUrl: './issue-create.component.html',
  styleUrls: ['./issue-create.component.scss']
})
export class IssueCreateComponent implements OnInit {

  issue: IIssue = {name: null, description: null, inProgress: null, created: new Date().getTime(), projectId: null};

  projectId: number;

  constructor(private dataissuesService: IssuesProvider,
              private route: ActivatedRoute,
              private _location: Location,
              private spinner: NgxSpinnerService,
              private dataprojectService: ProjectsProvider) {
                route.queryParams.subscribe(params => {
                  this.projectId = params.projectId;
                })
               }

  ngOnInit() {}

  addIssue () {
    this.issue.projectId = Number(this.projectId);
    this.spinner.show();
    this.dataissuesService.createItem(this.issue).subscribe(issue => {
      this.spinner.hide();
      alert("Задачу успішно додано!");
     this.goToProjectDetail();
   },
   error => {
    alert(error);
   });   
  }

  goToProjectDetail() {
    this._location.back();
  }

}
