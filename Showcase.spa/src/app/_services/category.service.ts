import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Category } from '../_models/Category';
import { UrlsService } from '../_services/urls.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl =  this.urlsService.baseUrlApi + '/api/admin/';

  constructor(private http: Http, private urlsService: UrlsService, private authHttp: AuthHttp) {
  }

  getCategories(): Observable<Category[]> {
    return this.authHttp.get(this.baseUrl + 'categories', )
        .map(response => <Category[]>response.json())
        .catch(this.handleError);
  }

  register(category: Category) {
    return this.authHttp
    .post(this.baseUrl + 'addcategory', category, this.requestOptions())
    .catch(this.handleError);
  }

  private requestOptions() {
    const header = new Headers({ 'Content-type': 'application/json'});
    return new RequestOptions({ headers: header});
  }

  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
        return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = '';
    if (serverError) {
        for (const key in serverError) {
            if (serverError[key]) {
                modelStateErrors += serverError[key] + '\n';
            }
        }
    }
    return Observable.throw(
        modelStateErrors || 'Server error'
    );
  }
}


