import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Token } from 'src/app/models/token'; // Adjust the import path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')
      ])
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.doLogin(this.loginForm.value).subscribe(
        (data: Token) => {
          localStorage.setItem('token', data.token);
          console.log('Login successful:', data);
          // Handle successful login here
        },
        (err: any) => {
          alert('Internal Server Error');
          console.error('Login error:', err);
        }
      );
    } else {
      alert('Form is not valid');
    }
  }
}
