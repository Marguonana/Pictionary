import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idUtilisateur : string;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('compte')){
      this.idUtilisateur = sessionStorage.getItem('compte');
    }
  }

  getMenu() : boolean {
    if (!this.idUtilisateur){
      if (sessionStorage.getItem('compte')){
        this.idUtilisateur = sessionStorage.getItem('compte');
        console.log('############## '+this.idUtilisateur);
        this.supprimerCompte();
        return true;
      }
      return false;
    }else{
      this.supprimerCompte();
      return true;
    }
  }

  supprimerCompte() {
    this.api.delete('/joueur/'+ this.idUtilisateur+ '/').toPromise()
    .then( () => {
      console.log('Compte supprimé. \n');
      this.router.navigate(["/"]);
    })
  }

}
