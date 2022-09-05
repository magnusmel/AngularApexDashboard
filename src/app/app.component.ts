import { Component} from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService:OAuthService){
    this.configureSingleSignOn();
  }

  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.setStorage(localStorage);
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  checksessionstorage() {
    console.log(localStorage);
  }
  // login(){
  //   this.oauthService.initImplicitFlow();
  // }

  // logout(){
  //   this.oauthService.logOut();
  //   console.debug('logout button pressed');
  // }

  get token(){
    let claims:any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}
