import {Component, Inject} from "@angular/core";
import {Http} from '@angular/http';

@Component({
  selector: 'body-selector',
  template: require('./body.html')
})

@Inject(Http)

export class BodyComponent {
  constructor(http: Http) {
    this.http = http;
    this.getText('app/texts/main.json').subscribe(result => {
      console.log(result);
      this.texts = result;
    });
    console.log(this.texts);
  }
  getText(url) {
    return this.http.get(url).map(response => response.json());
  }
}
