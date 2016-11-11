import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'fountain-app',
  template: require('./main.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class MainComponent {}
