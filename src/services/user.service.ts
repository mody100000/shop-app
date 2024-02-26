import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from './../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  addUser(user: Iuser): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/users',
      JSON.stringify(user),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/' }),
      }
    );
  }
}
