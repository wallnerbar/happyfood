import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NgxSelectModule } from 'ngx-select-ex';
import { TestListComponent } from './test-list/test-list.component';
import {FileUploadModule, FileUploader} from 'ng2-file-upload';
import {MediainputComponent} from './mediainput/mediainput.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

export function tokenGetter() {
  return localStorage.getItem( 'access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    TestListComponent,
    MediainputComponent,
    ProfileListComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    NgxSelectModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    JwtModule.forRoot( {
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
