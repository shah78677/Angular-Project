import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAwesomeApp';
  name: string = 'Habeeb Quadri';
  objDate = Date.now();
  strDate = 'Mon Nov 07 2016 09:44:12 GMT+0530'; 
  num: number;
  temp: number;
}
