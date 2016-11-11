import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'some-selector',
  template: require('./some.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class SomeComponent {
  constructor() {
    this.title = "Holla molaa!";
    this.description = 'this is the description';
  }
}
