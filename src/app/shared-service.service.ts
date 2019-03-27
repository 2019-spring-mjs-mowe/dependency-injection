import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  public data = 'Uninitialized Service Data';

  constructor() { }

  public reverse() {
    this.data = this.data.split('')
      .reverse()
      .join('');
  }
}
