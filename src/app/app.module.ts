import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CustomMaterialModule } from './core/material.module';
import {MatInputModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SoumissionReponseComponent } from './soumission-reponse/soumission-reponse.component';
import { ThemesComponent } from './themes/themes.component';
import { DrawzoneComponent } from './drawzone/drawzone.component';
import { ChatComponent } from './chat/chat.component';
import { PointComponent } from './point/point.component';
import { PartieComponent } from './partie/partie.component';
import { ToastrComponent } from './toastr/toastr.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SoumissionReponseComponent,
    DrawzoneComponent,
    ChatComponent,
    ThemesComponent,
    DrawzoneComponent,
    PointComponent,
    PartieComponent,
    ToastrComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    MatInputModule,
    MatGridListModule,
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
      },
      {
        path: 'ecranReponses',
        component:SoumissionReponseComponent
      },
      {
        path: 'drawzone',
        component: DrawzoneComponent
      },
      {
        path: 'play',
        component: PartieComponent
      },
      {
        path: 'play/:theme',
        component: PartieComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
