import {Component, OnInit} from '@angular/core';  // note consistent quotes
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'body-selector',
  template: require('./body.html')
})
export class BodyComponent implements OnInit {
  constructor(http:Http, route:Router) {
    this.texts = []; // start with an empty array
    this.route = route;
    this.http = http;
  }  // inject Http here, no need to assign to this

  ngOnInit() {
    const currentRoute = this.route.url.toString() === '' ? 'main' : this.route.url;
    const jsonName = `${currentRoute}.json`;
    console.log(`current route URL is ${this.route.url}`);
    console.log(jsonName);
    this.http
      .get(`app/texts${jsonName}`)
      .map(response => response.json())
      .subscribe(result => {
        this.texts = result;
      });
    // outside the callback, the HTTP call hasn't yet finished
  }
}
