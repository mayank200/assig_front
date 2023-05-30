import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
// import { ToastrService } from 'ngx-toastr';
// import { Md5 } from 'ts-md5/dist/md5';
import jwt_decode from 'jwt-decode';
import { DOCUMENT } from '@angular/common';
import * as CryptoJS from 'crypto-js';
import {Md5} from 'ts-md5/dist/md5';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  forgetPasswordModalOpen = false;
  pass: string = 'password';
  pass_title: string = 'Show';
  LoginForm: FormGroup;
  loginFormSubmitted = false;
  timeleft = 15;
  baseurl = '';


  constructor(
    private toastr: ToastrService,
    private el: ElementRef,
    private formbuilder: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.baseurl = document.location.protocol + '//' + document.location.hostname + ':4200';

      localStorage.clear();

    this.LoginForm = this.formbuilder.group({
      email: ['assignment@test.com',[Validators.required]],
      password: ['123456', [Validators.required]],
      name: ['',[Validators.required]],
    });
  }

  get f() {
    return this.LoginForm.controls;
  }

  viewpass() {
    if (this.pass != 'password') {
      this.pass = 'password';
      this.pass_title = 'Show';
    } else {
      this.pass = 'text';
      this.pass_title = 'Hide';
    }
  }

  onSubmit() {

    this.loginFormSubmitted = true;


    let data = {
      id: this.f.email.value,
      pass:this.f.password.value,
      name: this.f.name.value,
    };

    // return;
    this.timeleft = 15;

    if (this.LoginForm.valid) {

      this.loginService.login(data).subscribe((resData: any) => {
        if (resData.status) {
          localStorage.setItem('login', '1');
          localStorage.setItem('activeUser', JSON.stringify(resData));
          let localStorageData = localStorage.getItem('activeUser');
          if (localStorageData != null) {
            let localStorageObject = JSON.parse(localStorageData);
            let token = localStorageObject.token;

            let decodedTokenData = jwt_decode(token);

            let decodedTokenDataString = JSON.stringify(decodedTokenData);

          }

          this.router.navigate(['/products']);
        } else {
          this.toastr.error('User Id Or Password Does not Match. Please refer to readme on git for details.','Oops!')
        }
      });
    } else {
      this.toastr.error('All Fields are Mandatory.','Oops!')
    }
  }


}
