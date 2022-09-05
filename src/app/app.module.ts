import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { IFrameComponent } from './iframe/iframe.component'; //imported for OAuth SSO login
//import { ApextestComponent } from './apextest/apextest.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    OAuthModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    IFrameComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
