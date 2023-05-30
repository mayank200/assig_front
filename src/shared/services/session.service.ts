import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  check_user_session(){
    let session_obj:any = JSON.parse(localStorage.getItem('activetUser'));
    if(session_obj && (typeof session_obj == 'object') ){
        return true;

    }else{
      return false;
    }
  }

  set_user_session(data){
    localStorage.setItem('activetUser',JSON.stringify(data));
  }

  get_user_session(required_item=''){
    const session_obj:any = JSON.parse(localStorage.getItem('activeUser'));
    if(required_item == ''){
      return session_obj;
    }else{
      if(required_item in session_obj){
          return session_obj.required_item;
      }else{
        return '';
      }
    }
  }
  
  get_user_token(required_item=''){
    const session_obj:any = JSON.parse(localStorage.getItem('activeUser'));
    if(required_item == ''){
      const tokenPayload_d: any = decode(session_obj.token);
      return tokenPayload_d;
    }
  }


  destroy_user_session(){
    localStorage.removeItem('activetUser');
    localStorage.removeItem('ticket');
  }

}
