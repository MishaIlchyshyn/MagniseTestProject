import { Injectable } from '@angular/core';
import { ProjectModel } from './project.model'

@Injectable({
  providedIn: 'root'
})
export class DataprojectsService {

  private dataProjects : ProjectModel[] = [
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
    { 
      id: 1, 
      name: 'How create angular prog', 
      description: 'Angular create prog is cli ng new name-project',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 2, 
      name: 'How create angular component', 
      description: 'Angular create prog is cli ng generate component name-component',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 3, 
      name: 'How create angular routes', 
      description: 'Angular create prog is cli ng generate routes name-routes',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },

    { 
      id: 4, 
      name: 'How include bootstrap in angular', 
      description: 'Bootstrap include in Angular prog is run command ng install bootstrap',  
      img: 'https://previews.123rf.com/images/3vectorbest/3vectorbest1612/3vectorbest161209700/68249206-project-inbox-icon-vector-illustration-flat-design-style-.jpg'
    },
  ];

  getProjectById(id) {
    for (let i = 0; i < this.dataProjects.length; i++) {
      if (this.dataProjects[i].id === Number(id)) {
        return this.dataProjects[i];
      }
    }
  }

  getProjects() {
    return this.dataProjects;
  }

  addProject(id: number, name: string, description: string, img: string) {
    this.dataProjects.unshift({id, name, description, img});
  }

  constructor() { }
}
