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
  

  constructor(private router: Router) { }

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
