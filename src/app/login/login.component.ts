import { ApiService } from './../api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionPanelDescription, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ExceptionFactoryService } from '../service/exception-factory.service';
import { RouteList } from '../data.service';

import { ToastrComponent } from '../toastr/toastr.component';
import { HttpParams } from '@angular/common/http';


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
  

  constructor(private router: Router,
    private api : ApiService) {
    this.createAccount = false;
   }

  ngOnInit() {
    if(sessionStorage.getItem('pseudo') && sessionStorage.getItem('pseudo').length > 0){
      this.redirectToTheme();
    }
  }

  login() : void {

    if(this.username && this.password){
      this.api.post<Joueur>('/joueur/user/',{'pseudo':this.username, 'mdp':this.password}).toPromise()
      .then(res => {
        console.log(res);
        if (res && !res.err){
          sessionStorage.setItem('pseudoCompte',res.username);
          sessionStorage.setItem('compte',res._id);
          this.router.navigate(["/themes"]);
        }
      })
      .catch(err => { if (err.error && err.error.err){
        alert(err.error.err);
      } })
    }else {
      console.log("Mot de passe incorrect");
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
      this.api.post<Joueur>('/joueur/',{email: this.email, username: this.username, password: this.password}).toPromise()
      .then(retour => {
        console.log(retour);
        sessionStorage.setItem('compte',retour._id);
        this.router.navigate(["/themes"]);
      })
      .catch(err => { console.log(err); })
    }
    return true;
  }

  ngOnDestroy(): void {

  }
}

class Joueur {
  _id : string;
  username: string;
  email: string;
  score: number;
  err: string;
}
