import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.baseURL);
  }
}