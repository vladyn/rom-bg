import {Component, Injectable} from "@angular/core";
import {TextService} from "./textService";

@Component({
  selector: 'text-wrapper',
  template: require('./placeholder.html')
})

@Injectable()

export class TextsComponent {
  constructor(textService: TextService) {
    console.log(textService);
  }
  getText(): void {
    // body...
  }

  getTitle() {

  }
}
