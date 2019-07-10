import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SharerService {

  private _projectId = new Subject<any>();

  setProjectId(id: number) {
    this._projectId.next(id);
  }

  get getProjectId() {
    return this._projectId;
  }
}