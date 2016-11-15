import {Component} from '@angular/core';

@Component({
  selector: 'myComponent',
  template: require('./myComponent.html')
})
export class MyComponent {
  constructor() {
    this.text = 'My brand new component!';
  }
}
