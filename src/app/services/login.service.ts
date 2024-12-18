import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../models/token'; // Adjust the import path as necessary
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://reqres.in/api/login'; // Your API URL

  constructor(private httpClient: HttpClient) {}

  doLogin(payLoad:Login): Observable<Token> {
    return this.httpClient.post<Token>(this.apiUrl, payLoad);
  }
}
