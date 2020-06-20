import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  public beURL = environment.beURL;
  constructor(private http: HttpClient) {}

  // get call for urls values
  public getFilteredData = (filterParams) => {
    const filteredData = this.http.get(`${this.beURL}search/event${filterParams}`)
      .pipe(map((Response) => Response));
    return filteredData;
  }


}
