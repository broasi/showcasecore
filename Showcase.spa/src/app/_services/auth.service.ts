import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { User } from '../_models/User';
import { UrlsService } from '../_services/urls.service';

@Injectable()
export class AuthService {
  baseUrl =  this.urlsService.baseUrlApi + '/api/auth/';
  userToken: any;
  decodedToken: any;
  currentUser: User;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http, private urlsService: UrlsService) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model, this.requestOptions()).map((response: Response) => {
        const user = response.json();
        if (user) {
            localStorage.setItem('token', user.tokenString);
            localStorage.setItem('user', JSON.stringify(user.user));
            this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
            this.currentUser = user.user;
            this.userToken = user.tokenString;
        }
    }).catch(this.handleError);
  }

  register(user: User) {
    return this.http
    .post(this.baseUrl + 'register', user, this.requestOptions())
    .catch(this.handleError);
  }

  loggedIn() {
      return tokenNotExpired('token');
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
