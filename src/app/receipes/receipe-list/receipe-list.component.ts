import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
    new Receipe ('A test Receipe', 'a simple test', 'https://emages.eventshigh.com/2017/2/14/img_38a86ae54ac7397d1aeebba8b0300d61_1487067602384_processed_original.jpg'),
    new Receipe ('A test Receipe', 'a simple test', 'https://emages.eventshigh.com/2017/2/14/img_38a86ae54ac7397d1aeebba8b0300d61_1487067602384_processed_original.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
