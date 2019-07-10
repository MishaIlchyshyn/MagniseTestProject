import { Component, OnInit } from '@angular/core';
import { IssuesProvider } from '../../communication/services/issues-provider';
import { IIssue } from 'communication';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.scss']
})
export class IssueEditComponent implements OnInit {

  issue: IIssue = {name: null, description: null, inProgress: null, created: new Date().getTime(), projectId: null};
  prodjectId: number;
  constructor(private spinner: NgxSpinnerService, private dataissueService: IssuesProvider, private _location: Location, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.spinner.show();
    this._route.queryParams.subscribe( params => {
      this.prodjectId = params.projectId;
      this.dataissueService.getItemById(Number(params.id), Number(params.projectId)).subscribe( issue => {
        this.issue = issue;
        this.spinner.hide();
      });
    });    
  }

  saveIssue() {
    this.spinner.show();
    this.dataissueService.updateItem(this.issue).subscribe(issue => {
      this.spinner.hide();
      alert("Задачу успішно відредаговано!");
      this.goToProjectDetail();
    },
    error => {
      alert(error); 
    })
  }

  goToProjectDetail() {
    this._location.back();
  }


}
