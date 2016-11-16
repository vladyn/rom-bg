import {Component, OnInit} from '@angular/core';  // note consistent quotes
import {Http} from '@angular/http';

@Component({
  selector: 'body-selector',
  templateUrl: './body.html'
})
export class BodyComponent implements OnInit {
  texts = [];  // start with an empty array

  constructor(http: Http) { }  // inject Http here, no need to assign to this

  ngOnInit() {
    this.http
      .get('app/texts/main.json')
      .map(response => response.json())
      .subscribe(result => {
        console.log(result);  // only log *inside* the callback
        this.texts = result;
      });
  }
}
