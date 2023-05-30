import { environment } from '../../environments/environment';

/************************Api base URL******************************/

export const service_baseurl: string = environment.nodeApiUrlLatest;

//  ng build --base-href=assig_front

export const login_url: string = service_baseurl + "login";
export const crud_operation_url: string = service_baseurl + "crud_operation";
