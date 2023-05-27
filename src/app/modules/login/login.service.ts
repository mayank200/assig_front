import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as constants from '../../../shared/helpers/constants';
import { CallApiService } from '../../../shared/services/call-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _CallApiService: CallApiService,
    private http:HttpClient
    ) { }

  private login_url: string =constants.login_url;
  // private resetPassword_url: string =constants.resetPassword_url;

  login(userData:any){
    return this._CallApiService.post(userData,this.login_url);

  }
  // resetPassword(userData:any){
  //   return this._CallApiService.post(userData,this.resetPassword_url);
  // }
}
