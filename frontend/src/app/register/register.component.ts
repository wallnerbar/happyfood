import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../api/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isLoggedIn: boolean;
  registerForm;
  value1;
  user: User = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'password2': new FormControl('', [Validators.required]),
    });

    this.registerForm.controls.password.valueChanges
      .subscribe((newValue) => {
        this.value1 = newValue;
      });

    this.registerForm.controls.password2.valueChanges
      .subscribe((newValue) => {
        if (this.value1 === newValue) {
          this.registerForm.controls.password2.setErrors(null);
        } else {
          this.registerForm.controls.password2.setErrors({ mismatch: true });
        }
      });

    this.isLoggedIn = this.userService.isLoggedIn;
    this.userService.loggedInChange.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  saveUser() {
    const result = this.registerForm.value;
    this.user.username = result.username;
    this.user.password = result.password;
    this.userService.create(this.user)
      .subscribe((response: any) => {
        alert('created successfully');
      });
  }
}
