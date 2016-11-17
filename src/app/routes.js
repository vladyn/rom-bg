import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main';
import {BodyComponent} from './body';

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
    component: BodyComponent
  },
  {
    path: 'another',
    component: BodyComponent
  },
  {
    path: 'yet',
    component: BodyComponent
  }

];

export const routing = RouterModule.forRoot(routes);
