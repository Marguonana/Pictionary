import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {

  observableJoueur : any;
  joueurs : Array<Joueur>;
  constructor(private api: ApiService) { }

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
      }
    })
    .catch( err => console.log(err))   
  }

}

class Joueur {
  _id : string;
  username: string;
  email: string;
  score: number;
  err: string;
}