import {Component} from "@angular/core";

@Component({
  selector: 'some-selector',
  template: require('./some.html')
})
export class SomeComponent {
  constructor() {
    this.title = "Holla molaa!";
    this.description = 'this is the description';
  }
}
