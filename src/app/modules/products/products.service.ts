import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CallApiService } from 'src/shared/services/call-api.service';
import * as constants from '../../../shared/helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( 
    private _CallApiService: CallApiService,
    private http:HttpClient
    ) { }

  private crud_operation_url: string =constants.crud_operation_url;
  // private resetPassword_url: string =constants.resetPassword_url;

  crud_operation(userData:any){
    return this._CallApiService.post(userData,this.crud_operation_url);

  }

}
