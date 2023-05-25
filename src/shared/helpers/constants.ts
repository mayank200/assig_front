import { environment } from '../../environments/environment';

/************************Api base URL******************************/

export const service_baseurl: string = environment.nodeApiUrlLatest;


export const get_dashboard_data_url: string = service_baseurl + "get_dashboard_data";
