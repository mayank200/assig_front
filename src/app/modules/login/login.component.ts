import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  openEye = false;
  pass: string = 'password';
  pass_title: string = 'Show';
  LoginForm!: UntypedFormGroup;
  ForgotPasswordForm!: UntypedFormGroup;
  loginFormSubmitted = false;
  invalidUser = false;
  timeleft = 15;
  counter: any;
  loginerrormsg = 'Invalid username or password!. Please try again';
  ForgotPasswordSubmit = false;
  forgotPasswordError = false;
  forgotPasswordMsg = '';
  forgotPasswordSuccess = false;
  forgotPasswordSuccessMsg = '';
  baseurl = '';
  secretkey='CJ-jobsAuthenticKey!!'
  conversionEncryptOutput: any;
  encrypted: any;
  anio: number = new Date().getFullYear();
  constructor(
    @Inject(DOCUMENT) private document: Document,
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
      name: ['mayank',[Validators.required]],
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
      email: this.f.email.value,
      password:this.f.password.value,
      name: this.f.name.value,
    };

    // return;
    this.timeleft = 15;

    if (this.LoginForm.valid) {

      this.router.navigate(['/products']);

      // this.loginService.user_login(data).subscribe((resData: any) => {
      //   if (resData.status!=='False') {
      //     localStorage.setItem('login', '1');
      //     localStorage.setItem('activeUser', JSON.stringify(resData));
      //     let localStorageData = localStorage.getItem('activeUser');
      //     if (localStorageData != null) {
      //       let localStorageObject = JSON.parse(localStorageData);
      //       let token = localStorageObject.token;

      //       let decodedTokenData = jwt_decode(token);

      //       let decodedTokenDataString = JSON.stringify(decodedTokenData);

      //     }
      //   } else {
      //     this.invalidUser = true;
      //     this.loginerrormsg = resData.msg;
      //     var downloadTimer = setInterval(() => {
      //       this.counter = this.timeleft - 10;

      //       this.timeleft -= 1;
      //       if (this.counter === 0) {
      //         this.invalidUser = false;
      //         clearInterval(downloadTimer);
      //       }
      //     }, 1000);
      //   }
      // });
    } else {
      this.toastr.error('All Fields are Mandatory.','Oops!')
    }
  }


}
