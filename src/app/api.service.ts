import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  baseURI = '';

  constructor(private http: Http) { }

  getLocations() {
    return this.http.get(`${this.baseURI}/locations`);
  }
}
