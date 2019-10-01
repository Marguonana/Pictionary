import { Component, OnInit, OnDestroy } from '@angular/core';
import {   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionPanelDescription } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  private username: String;
  private email: String;
  private password2 : String;
  private password: String;
  private createAccount : boolean;
  

  constructor(private router: Router) {
    this.createAccount = false;
   }

  ngOnInit() {

  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["channel"]);
    }else {
      alert("Invalid credentials");
    }
  }

  /***
   * Interroge la base pour savoir si le nom d'utilisateur est déjà pris
   * Si le nom d'utilisateur est dispo, la creation peut se faire.
   */
  create() : boolean {
    if (this.username){
      // Call verification back
    }

    if(this.password && this.password2 && (this.password !== this.password2)){
      // throw new Exception() 
    }
    return true;
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
}
