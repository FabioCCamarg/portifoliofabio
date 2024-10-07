import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  selectedImage: string = "";
  openModal(imageUrl: string){

   this.selectedImage = imageUrl;

  }
 }
