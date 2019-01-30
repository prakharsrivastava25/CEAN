import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getResults(): any {
    return this.http.get('http://localhost:3000/');
  }
  postData(postData): any {
    console.log("post data from service",postData);
    return this.http.post('http://localhost:3000/',postData);
  }
}
