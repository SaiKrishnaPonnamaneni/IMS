import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) {}
    doLogin(data:Token):Observable<any>{
    return this.httpClient.post(" https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data);
     }
   }
