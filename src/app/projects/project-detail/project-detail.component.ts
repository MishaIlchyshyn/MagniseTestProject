import { Component, OnInit } from '@angular/core';
import { DataprojectsService } from '../data-projects.service';
import { ProjectModel } from '../project.model';
import { ActivatedRoute } from '@angular/router';
import { FakeProjectsProvider } from '../../communication/services/fake-projects-provider';
import { IProject } from '../../communication/models/project';
import { SharerService } from '../services/shared.services';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: IProject = {id: null, name: null, description: null, image: null, issues: []};

  constructor(private dataprojectsService : FakeProjectsProvider, private route: ActivatedRoute, private sharer: SharerService) { 
    this.route.queryParams.subscribe(params => {
      dataprojectsService.getItemById(params.id).subscribe(project => {
        this.project = project;
        sharer.setProjectId(params.id);      
      });
    });
  }

  ngOnInit() {
       
  }

}
