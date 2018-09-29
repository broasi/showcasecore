import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  baseUrl: any;
  baseUrlApi: any;

  constructor() {
    this.baseUrl = '../../images';
    this.baseUrl =  window.location.origin;
    this.baseUrlApi =  'http://localhost:5000';
    if (window.location.origin !== 'http://localhost:5000' && window.location.origin !== 'http://localhost:4200') {
      this.baseUrl =  window.location.origin + '/core';
      this.baseUrlApi =  window.location.origin + '/core';
    }
  }

  basePath() {
    return this.baseUrl;
  }

  basePathApi() {
    return this.baseUrlApi;
  }

}
