import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
  getSortedStudents(column:string,order:string):Observable<any>{
    return this.httpClient.get(this.apiUrl+"?sortBy="+column+"&order="+order)
  }
  getFilteredStudents(term:string):Observable<any>{
    return this.httpClient.get(this.apiUrl+"?filter="+term)

  }
  getStudentDetails(id: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiUrl+"/"+id)
  }
  updateStudent(id:string,data:any):Observable<any>{
    return this.httpClient.put(this.apiUrl+"/"+id, data)
  }
}
