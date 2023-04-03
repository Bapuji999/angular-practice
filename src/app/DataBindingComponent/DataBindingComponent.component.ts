import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-DataBindingComponent',
  templateUrl: './DataBindingComponent.component.html',
  styleUrls: ['./DataBindingComponent.component.css']
})
export class DataBindingComponentComponent implements OnInit {
  stringInterpolation:string = 'I am string interpolation.';
  boolValue:boolean = false;
  disabled:string = "I am property binding ex";
  propBinding(){
    this.boolValue = true;
    this.disabled = "Disabled";
  }
  constructor() { }

  ngOnInit() {
  }

}
