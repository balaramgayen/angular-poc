import { AuthService } from './../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private toast: NgToastService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public get formControl(): any {
    return this.loginForm.controls;
  }

  loginSubmit() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Success Message',
          summary: 'User logged successfully',
          duration: 3000,
        });
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.toast.warning({
          detail: 'warning Message',
          summary: 'error occurred, please try again',
          duration: 3000,
        });
      },
    });
  }
}
