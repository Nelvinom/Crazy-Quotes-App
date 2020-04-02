import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'Nobody else','Find an online version and watch merlin find his son'),
    new Quote(2, 'Nobody can','Find an online version and watch merlin find his car'),
    new Quote(3, 'Nobody will','Find an online version and watch merlin find his dog'),
    new Quote(4, 'Nobody shall','Find an online version and watch merlin find his pen'),
    new Quote(5, 'Nobody ever','Find an online version and watch merlin find his daughter'),
    new Quote(6, 'Nobody ever will','Find an online version and watch merlin find his cat'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = ! this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
