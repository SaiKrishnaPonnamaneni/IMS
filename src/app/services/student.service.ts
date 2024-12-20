import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }
  private apiUrl:string="https://62b9299dff109cd1dc8ca34f.mockapi.io/students"

  createStudent(data:Student):Observable<any>{
   return this.httpClient.post(this.apiUrl,data)
  }
  getStudent():Observable<any>{
    return this.httpClient.get(this.apiUrl)
  }
  getPagedStudents(limit:number,page:number):Observable<any>{
     return this.httpClient.get(this.apiUrl+"?limit="+limit+"&page="+page)
  }
}
