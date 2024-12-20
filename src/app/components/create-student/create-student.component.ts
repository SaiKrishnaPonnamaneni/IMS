import { Component } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
public studentForm:FormGroup = new FormGroup(
  {
    name: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl('',[Validators.required]),
    batch: new FormControl('',[Validators.required]),
    address: new FormGroup(
      {
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl('',[Validators.required]),
        state: new FormControl(),
        pincode: new FormControl('',[Validators.required,Validators.maxLength(6)]),
      }
    ),
    education: new FormArray([]),
    company: new FormGroup( {
      name:  new FormControl(),
      location:  new FormControl(),
      package:  new FormControl(),
      offerDate:  new FormControl(),
  }),
  sourceType:new FormControl(),
  }
)

constructor(private studentService:StudentService){
  this.studentForm.get('sourceType')?.valueChanges.subscribe(
    (data:any)=>{
     if(data=='Direct'){
      this.studentForm.addControl('sourceFrom',new FormControl)
      this.studentForm.removeControl('referralName')
     } else if(data=='Refer'){
      this.studentForm.addControl('referralName',new FormControl)
      this.studentForm.removeControl('sourceFrom')
     }

    }
  )
}

get educationFormArray(){
  return this.studentForm.get('education') as FormArray;
}

addEducation(){
   this.educationFormArray.push(
    new FormGroup(
      {
        qualification:new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.min(0),Validators.max(100)]),
      }
    )
   )
}
deleteEducation(i:number){
  this.educationFormArray.removeAt(i);
}

submit(){
  this.studentService.createStudent(this.studentForm.value).subscribe(
  (data:any)=>{
    this.studentForm=data;
    alert("Created Student Sccesfully")
  },
  (err:any)=>{
    alert("Creation Faild");
  }
  )
  
}
}
