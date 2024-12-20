import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent {
  students: Student[] = [];
  constructor(private studentService:StudentService){
    this.studentService.getStudent().subscribe(
      (data:Student[])=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }

}
