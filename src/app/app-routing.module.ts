import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { ThemesComponent } from './themes/themes.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent },
  { path: 'themes', component: ThemesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
