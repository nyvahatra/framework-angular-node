import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiUrlService {

  /*config lors développement local */
    RACINE_API: string = 'localhost';  
    PORT_API: string = '3000';


  /*config lors déploiement server*/
 // RACINE_API: string = '192.168.12.236';
 // PORT_API: string = '91';
  
  
  /*do not change*/
  CHEMIN_RACINE_SERVER: string = this.RACINE_API == 'localhost' ? '':'/dashboard_sg_api';
  
  REST_API: string = 'http://' + this.RACINE_API + ':' + this.PORT_API + this.CHEMIN_RACINE_SERVER;
  
  
  constructor() { }
}
