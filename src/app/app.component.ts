import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-crash-todolist';
  name:string = 'charlie';

  constructor() {  // this runs when the component loads
   //  this.name = "Steve"   //will override and make the name Steve

  }
}
