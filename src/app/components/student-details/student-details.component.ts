import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  students: Student[] = [];
  id:string=''
  constructor(private studentService:StudentService){}
  getStudent(){
    this.studentService.getStudentDetails(this.id).subscribe(
      (data:Student[])=>{
        this.students=data;
      }
    )
  }  

}
