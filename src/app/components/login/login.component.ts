import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm : FormGroup;
  public constructor(private loginService:LoginService){
    this.loginForm=new FormGroup({
      email : new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')])
  
    })
  }
  
  login(){
    this.loginService.doLogin(this.loginForm.value).subscribe(
     (data:any)=>{
      this.loginForm=data;
     },
     (err:any)=>{
      alert("Internal Server Error");
     }

    )
  }
}
