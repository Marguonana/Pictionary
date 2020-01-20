import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { HttpParams } from '@angular/common/http';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {

  observableJoueur : any;
  joueurs : Array<Joueur>;
  word: any;
  dessinateur : boolean = false;
  showChooseWord : boolean = false;
  constructor(private api: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.observableJoueur = Observable.create((observer : any) => {
      try {
        setInterval(() => {
          observer.next(this.checkJoueur())
        },2000)
      } catch (err){
        observer.error(err);
      }
    }) 
    this.observableJoueur.subscribe();   
  }

  checkJoueur() {
    this.api.get<Array<Joueur>>('/partie/'+sessionStorage.getItem('idPartie')+'/actifs').toPromise()
    .then(received => {
      if(received && received.length > 0){
        console.log(received);
        this.joueurs = received;

        // Gestion des dessinateurs
        let nomJoueurs = new Array();
        this.joueurs.forEach(res =>  nomJoueurs.push(res.id) )
        console.log('nomJoeurs     ' ,nomJoueurs)
          this.api.get<any>('/partie/'+ sessionStorage.getItem('idPartie')+ '/motATrouver')
          .subscribe( res => {
            localStorage.setItem('key',res.motATrouver);
              if( nomJoueurs[1] == sessionStorage.getItem('compte') && !this.showChooseWord){
                this.dessinateur = true;
                this.showChooseWord = true;
                this.openConfirmDelete(res.motATrouver)
              }
              else {this.dessinateur = false;}
          }) 
      }
    })
    .catch( err => console.log(err))   
  }

  
  openConfirmDelete(word): void {
    const confirmRef = this.dialog.open(MyDialogComponent, {
      width: '650px',
      data: word
    });
    confirmRef.afterClosed().subscribe( selection => {
      if (selection) {
        console.log(selection)
      }
      console.log('La fenêtre a été fermé.');
    });
  }

}

class Joueur {
  _id : string;
  username: string;
  email: string;
  score: number;
  err: string;
  id: any;
}