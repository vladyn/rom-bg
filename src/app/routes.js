import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main';
import {SomeComponent} from './some';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'some',
    component: SomeComponent
  }
];

export const routing = RouterModule.forRoot(routes);
