import { Component, OnInit, OnDestroy } from '@angular/core';
import {   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  private pseudo: String;
  private firstname: String;
  private lastname: String;
  private email: String;
  private password: String;
  private createAccount : boolean;
  

  constructor(private router: Router) {
    this.createAccount = false;
   }

  ngOnInit() {

  }

  login() : void {
    if(this.pseudo == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
}
