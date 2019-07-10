import { Component, OnInit, Input } from '@angular/core';
import { FakeIssuesProvider } from '../../communication/services/fake-issues-provider';
import { SharerService } from '../services/shared.services';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  constructor(private fakeIssuesProvider: FakeIssuesProvider, private _sharer: SharerService) { }

  ngOnInit() {   
    this._sharer.getProjectId.subscribe( id => {
      this.fakeIssuesProvider.getItems(id).subscribe( data => console.log(data));
    });
  }

}
