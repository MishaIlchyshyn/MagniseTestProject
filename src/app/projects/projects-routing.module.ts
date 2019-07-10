import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
  },
  {
    path: 'project-detail',
    component: ProjectDetailComponent
  },
  {
    path: 'create-project',
    component: CreateProjectComponent
  },
  {
    path: 'edit-project',
    component: EditProjectComponent
  },
  {
    path: 'project-detail/edit-project',
    component: EditProjectComponent
  },
  {
    path: 'project-detail/create-issue',
    component: IssueCreateComponent
  },
  {
    path: 'project-detail/issue-detail',
    component: IssueDetailComponent
  },
  {
    path: 'project-detail/issue-detail/issue-edit',
    component: IssueEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectsRoutingModule { }
