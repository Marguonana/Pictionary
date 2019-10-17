import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import { CustomMaterialModule } from './core/material.module';
import {MatInputModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ThemesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent

      },
      {
        path:'themes',
        component: ThemesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
