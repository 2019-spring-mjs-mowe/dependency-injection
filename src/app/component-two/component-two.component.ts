import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  public get fooBarCat() {
    return this.cat.data;
  }

  dogParrot() {
    console.log('Something');
    this.cat.data = 'Something';
    this.cat.reverse();
  }

  private cat: SharedServiceService;

  constructor(cat: SharedServiceService) { 
    this.cat = cat;
  }

  ngOnInit() {
  }

}
