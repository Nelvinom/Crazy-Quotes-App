import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    {id:1, name:'Nobody else',description:'Find an online version and watch merlin find his son'},
    {id:2, name:'Nobody can',description:'Find an online version and watch merlin find his car'},
    {id:3, name:'Nobody will',description:'Find an online version and watch merlin find his dog'},
    {id:4, name:'Nobody shall',description:'Find an online version and watch merlin find his pen'},
    {id:5, name:'Nobody ever',description:'Find an online version and watch merlin find his daughter'},
    {id:6, name:'Nobody ever will',description:'Find an online version and watch merlin find his cat'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
