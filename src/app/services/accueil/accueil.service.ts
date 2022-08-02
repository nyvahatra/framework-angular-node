import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GlobalApiUrlService } from '../global-api-url.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccueilService {

  constructor(private http: HttpClient, private url:GlobalApiUrlService) { }
  REST_API = "http://localhost:3000";
  
  getLastDataCheck(){
    var API_URL = this.url.REST_API+'/get-last-data-check';
    return this.http.get(API_URL, {})
  }
}
