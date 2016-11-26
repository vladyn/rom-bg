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
