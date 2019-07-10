import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { DataprojectsService } from './data-projects.service';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { SharerService } from './services/shared.services';

@NgModule({
  declarations: [
    ProjectListComponent, 
    ProjectDetailComponent, 
    CreateProjectComponent, 
    EditProjectComponent, 
    IssueListComponent, 
    IssueCreateComponent, 
    IssueDetailComponent, 
    IssueEditComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    DataprojectsService,
    SharerService
  ],
})
export class ProjectsModule { }
