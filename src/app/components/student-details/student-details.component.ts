import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  student: any = {}

  constructor(private studentService: StudentService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getStudent(params['id']);
    });
  }

  getStudent(id: string): void {
    this.studentService.getStudentDetails(id).subscribe(
      (data: any) => {
        this.student = data;
      },
      (error: any) => {
        console.error('Error fetching student details', error);
      }
    );
  }
}