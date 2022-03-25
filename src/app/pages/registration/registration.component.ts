import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router, private toast: NgToastService) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public get formControl(): any {
    return this.registerForm.controls;
  }

  registerSubmit() {
    localStorage.setItem('user', JSON.stringify(this.registerForm.value));
    this.toast.success({
      detail: 'Success Message',
      summary: 'User registered successfully',
      duration: 3000,
    });
    this.router.navigate(['/login']);
  }
}
