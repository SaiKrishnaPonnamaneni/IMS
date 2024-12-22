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
  limit : number=0;
  page : number=0;
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

  pagedStudents(){
    this.studentService.getPagedStudents(this.limit,this.page).subscribe(
      (data:Student[])=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )

  }

  
}
