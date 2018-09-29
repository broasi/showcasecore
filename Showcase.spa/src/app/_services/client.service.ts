import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Client } from '../_models/Client';
import { ClientEdit } from '../_models/ClientEdit';
import { UrlsService } from '../_services/urls.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl =  this.urlsService.baseUrlApi + '/api/admin/';

  constructor(private http: Http, private urlsService: UrlsService, private authHttp: AuthHttp) { }

  register(client: Client) {
    return this.authHttp
    .post(this.baseUrl + 'addclient', client, this.requestOptions())
    .catch(this.handleError);
  }

  UpdateClient(client: ClientEdit, client_Id) {
    return this.authHttp
    .put(this.baseUrl + 'updateclient/' + client_Id, client, this.requestOptions())
    .catch(this.handleError);
  }

  getClient(clientName: string): Observable<Client> {
    return this.authHttp.get(this.baseUrl + 'getclient/' + clientName.substring(clientName.lastIndexOf('*')+2), )
        .map(response => <Client>response.json())
        .catch(this.handleError);
  }

  listClients(): Observable<Client> {
    return this.authHttp.get(this.baseUrl + 'listallclients/', )
        .map(response => <Client>response.json())
        .catch(this.handleError);
  }

  deleteClient(id: number) {
    return this.authHttp.delete(this.baseUrl + 'deleteClient/' + id, {}).catch(this.handleError);
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
