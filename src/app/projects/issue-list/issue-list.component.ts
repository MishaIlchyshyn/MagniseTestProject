import { Component, OnInit, Input } from '@angular/core';
import { IssuesProvider } from '../../communication/services/issues-provider';
import { IIssue } from '../../communication/models/issue';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})

export class IssueListComponent implements OnInit {

  issues: IIssue[] = [];

  projectId: number;

  constructor(private dataissuesProvider: IssuesProvider,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService) {
                this.spinner.show();
      this.route.queryParams.subscribe(params => {
          this.projectId = params.id;
          dataissuesProvider.getItems(params.id).subscribe(issues => {
        this.issues = issues;
        this.spinner.hide();
      })
    })
}

  ngOnInit() {
    
  }

}
