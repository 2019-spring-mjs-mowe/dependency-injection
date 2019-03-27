import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  public get sharedData() {
    return this.svc.data;
  }

  public changeTheSharedData = () => {
    console.log('here');
    this.svc.data = 'Blah, blah...';
  }

  // Ctor DI ! ! ! 
  constructor(private svc: SharedServiceService) { }

  ngOnInit() {
  }

}
