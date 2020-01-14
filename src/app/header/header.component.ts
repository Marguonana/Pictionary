import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idUtilisateur : string;
  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem('compte')){
      this.idUtilisateur = sessionStorage.getItem('compte');
    }
  }

  getMenu(){
    if (!this.idUtilisateur){
      if (sessionStorage.getItem('compte')){
        this.idUtilisateur = sessionStorage.getItem('compte');
      }
    }
  }

}
