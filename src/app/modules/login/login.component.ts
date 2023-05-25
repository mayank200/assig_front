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
    // private toastr: ToastrService,
    private el: ElementRef,
    private formbuilder: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.baseurl = document.location.protocol + '//' + document.location.hostname + ':4200';

      localStorage.clear();



    this.LoginForm = this.formbuilder.group({
      email: ['',[Validators.required]],
      password: ['', [Validators.required]],
      name: ['',[Validators.required]],
    });
  }

  get LoginFormControl() {
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
    const md5 = new Md5();
    let password_enc = Md5.hashStr(this.LoginForm.value['password']);

    let data = {
      captcha: '',
      email: this.LoginForm.value['email'],
      // password: this.encrypt(this.LoginForm.value['password']),
      password:password_enc,
      recaptcha_value: 'NO',
    };

    // return;
    this.timeleft = 15;

    if (this.LoginForm.valid) {
      this.loginService.user_login(data).subscribe((resData: any) => {
        // console.log(resData)
        if (resData.status!=='False') {
          localStorage.setItem('login', '1');
          localStorage.setItem('activeUser', JSON.stringify(resData));
          let localStorageData = localStorage.getItem('activeUser');
          if (localStorageData != null) {
            let localStorageObject = JSON.parse(localStorageData);
            let token = localStorageObject.token;

            let decodedTokenData = jwt_decode(token);

            let decodedTokenDataString = JSON.stringify(decodedTokenData);

            let password_change = JSON.parse(
              decodedTokenDataString
            ).is_passwordchange;

            // if (password_change == 'N') {
            //   this.router.navigate(['/change-password']);
            // } else {

              localStorage.setItem('activeHeader', 'TP');
              this.router.navigate(['/dashboard']);
            // }
          }
        } else {
          this.invalidUser = true;
          this.loginerrormsg = resData.msg;
          var downloadTimer = setInterval(() => {
            this.counter = this.timeleft - 10;

            this.timeleft -= 1;
            if (this.counter === 0) {
              this.invalidUser = false;
              clearInterval(downloadTimer);
            }
          }, 1000);
        }
      });
    }
  }


}
