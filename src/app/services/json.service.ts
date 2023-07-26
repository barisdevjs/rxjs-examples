import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {  mergeMap, skip, take, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  baseURL = "https://jsonplaceholder.typicode.com";
  posts = "/posts/"

  constructor( private http : HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  getRawData(): Observable<any> {
    return this.http.get<any>(this.baseURL + this.posts + "2", {
      observe : "events"
    })
  }

  getPaginated(page: number, pageSize: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + this.posts).pipe(
      mergeMap((x => from(x))),
      skip(page * pageSize),
      take(pageSize),
      toArray()
    );
  }



}
