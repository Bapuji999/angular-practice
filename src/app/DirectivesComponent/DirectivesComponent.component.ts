import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-DirectivesComponent',
  templateUrl: './DirectivesComponent.component.html',
  styleUrls: ['./DirectivesComponent.component.css']
})
export class DirectivesComponentComponent implements OnInit {

  boolval:boolean = true;

  bool2Val:boolean = true;

  num:number = 1;

  val1:boolean = false;

  products = [
    {productName: 'app', productId: 1},
    {productName: 'web', productId: 2},
    {productName: 'seo', productId: 3}
  ]

  colors = [
    {colorName: "red"},
    {colorName: "black"},
    {colorName: "blue"},
    {colorName: "green"},
    {colorName: "yellow"}
  ]

  numbers = [
    {val: 1},
    {val: 2},
    {val: 3},
    {val: 4},
    {val: 5},
    {val: 6},
    {val: 7},
    {val: 8},
    {val: 9}
  ]

  changeBoolT(){
    this.boolval = true;
  }

  changeBoolF(){
    this.boolval = false;
  }

  changeBool2T(){
    this.bool2Val = true;
  }

  changeBool2F(){
    this.bool2Val = false;
  }

  getValue(value:any){
    this.num= value;
  }

  constructor() { }

  ngOnInit() {
  }

}
