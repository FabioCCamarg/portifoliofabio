import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [

  {path: '',
    title: 'inicio',redirectTo:'inicio', pathMatch:'full'},
  {path: 'inicio',
    title:'Início', component: HomeComponent},
  {path: 'sobre',
    title: 'Sobre', component: AboutComponent},
  {path:'projeto',
    title:'Projeto', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
