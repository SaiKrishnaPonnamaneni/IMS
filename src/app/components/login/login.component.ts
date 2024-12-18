import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private loginService: LoginService, private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')
      ])
    });
  }
  ngOnint():  void{

  }
  login(){
    this.loginService.doLogin(this.loginForm.value).subscribe(
     value=>{
      localStorage.setItem("token",value.token);
      this.router.navigateByUrl("/dashboard");
      alert("succes");
     },
     err=>{
      alert("Faild");
     }

    )

  }
  }

