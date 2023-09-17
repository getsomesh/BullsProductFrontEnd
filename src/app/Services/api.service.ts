import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public loggedIn: boolean = false;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  SignupUser(request: any) {
    return this.http.post(
       'https://localhost:7014/api/Values/Signup',
       request,
      this.httpOptions
    );
  }

  SigninUser(request: any) {
    return this.http.post(
       'https://localhost:7014/api/Values/Signin',
       request,
      this.httpOptions
    );
  }

}
