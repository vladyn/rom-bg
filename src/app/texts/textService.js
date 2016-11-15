import {Inject, Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()

@Inject('Http')

export class textService {

  constructor(http: Http) {
    this.http = http;
    this.getText().subscribe(result => {
      this.data = result;
    });
  }

  getText(waypoint) {
    return this.http().get(waypoint)
                      .map(response => response.json());
  }
}
