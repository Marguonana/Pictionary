import { Component, OnInit, OnDestroy } from '@angular/core';
import {   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionPanelDescription, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ExceptionFactoryService } from '../service/exception-factory.service';
import { DataService, RouteList } from '../data.service';

import { ToastrComponent } from '../toastr/toastr.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  private username: string;
  private email: string;
  private pseudo : string;
  private password2 : string;
  private password: string;
  private createAccount : boolean;
  private toastr : ToastrComponent;
  

  constructor(private router: Router, private dataService : DataService) {
    this.createAccount = false;
   }

  ngOnInit() {
    if(sessionStorage.getItem('pseudo') && sessionStorage.getItem('pseudo').length > 0){
      this.redirectToTheme();
    }
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["/themes"]);
    }else {
      this.toastr.openSnackBar("Mot de passe incorrect");
    }
  }

  quickLogin() : void {
    if (this.pseudo){
      sessionStorage.setItem("pseudo",this.pseudo);
      this.redirectToTheme();
    }
  }

  redirectToTheme() : void {
    this.router.navigate(['/themes']);
  }

  /***
   * Interroge la base pour savoir si le nom d'utilisateur est déjà pris
   * Si le nom d'utilisateur est dispo, la creation peut se faire.
   */
  create() : boolean {
    if(this.password && this.password2 && (this.password !== this.password2)){
      throw new ExceptionFactoryService("Mot de passe différent") 
    }
    if (this.email && this.username && this.password){
      console.log(this.email +" "+  this.username + " "+ this.password)
      this.dataService.setterParamsKey('email','username','password');
      this.dataService.setterParamsValues(this.email,this.username, this.password);
      this.dataService.sendPostRequest(new RouteList().dispatcher("createAccount")).subscribe((data)=>{
        this.toastr.openSnackBar(data.toString())},(failure)=> {
          this.toastr.openSnackBar(failure.error);
          
        })
    }
    return true;
  }

  ngOnDestroy(): void {

  }
}

class Joueur {
  
}
