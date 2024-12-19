import { Component } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
public studentForm:FormGroup = new FormGroup(
  {
    name: new FormControl(),
    gender: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    batch: new FormControl(),
    address: new FormGroup(
      {
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      }
    ),
    education: new FormArray([])
  }
)

get educationFormArray(){
  return this.studentForm.get('education') as FormArray;
}

addEducation(){
   this.educationFormArray.push(
    new FormGroup(
      {
        qualification:new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
      }
    )
   )
}
deleteEducation(i:number){
  this.educationFormArray.removeAt(i);
}
}
