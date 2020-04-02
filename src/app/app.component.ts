import { Quote } from './quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] =[
    // {id:1, name:'Nobody else'},
    // {id:2, name:'Nobody can'},
    // {id:3, name:'Nobody will'},
    // {id:4, name:'Nobody shall'},
    // {id:5, name:'Nobody ever'},
  ];
  }

