import { Component, OnInit } from '@angular/core';
import { IProject } from '../../communication/models/project';
import { ProjectsProvider } from '../../communication/services/projects-provider';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projects: IProject[];

  constructor(private dataProjectsService: ProjectsProvider, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.dataProjectsService.getItems().subscribe(projects => {
      this.projects = projects;
      this.spinner.hide();
    });
  }

  deleteProject(id) {
    let result = confirm("Ви дійсно бажаєте видалити цей проект?");
    if(result === true) {
      this.spinner.show();
      this.dataProjectsService.deleteItem(id).subscribe(deleted => {
        if (deleted) {
          this.spinner.hide();
          this.deleteItem(id);
          alert("Проект успішно видалено!");
        }
      },
      error => {
        alert(error);
      });
    }    
  }
  
  deleteItem(id) {
    const index = this.projects.findIndex(project => project.id === id);
    this.projects.splice(index, 1);
  }

}
