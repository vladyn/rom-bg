import {Component, OnInit} from '@angular/core';  // note consistent quotes
import {Http} from '@angular/http';
import * as route from '@angular/router';

@Component({
  selector: 'body-selector',
  template: require('./body.html')
})
export class BodyComponent implements OnInit {
  constructor(http: Http, route: route) {
    this.texts = []; // start with an empty array
    this.http = http;
    this.route = route;
  }  // inject Http here, no need to assign to this

  ngOnInit() {
    console.table(this);
    this.http
      .get('app/texts/main.json')
      .map(response => response.json())
      .subscribe(result => {
        this.texts = result;
      });
    // outside the callback, the HTTP call hasn't yet finished
  }
}
