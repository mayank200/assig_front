import { environment } from '../../environments/environment';

/************************Api base URL******************************/

export const service_baseurl: string = environment.nodeApiUrlLatest;


export const login_url: string = service_baseurl + "login";
