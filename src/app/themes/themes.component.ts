import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService, RouteList } from '../data.service';
import { ApiService } from '../api.service';
import { HttpParams } from '@angular/common/http';

export interface Tile {
 
  cols: number;
  rows: number;
  text: string;
  imageUrl: string;
  borderRadius: string;
  
}

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
   tiles: Tile[] ;

  constructor(private router: Router,private dataService: DataService,
    private api : ApiService) { 
     this.tiles = [
       {text: 'Transports', cols: 1, rows: 1 ,imageUrl:'assets/images/5.jpg', borderRadius:'20px'},
       {text: 'Fruits', cols: 1, rows: 1 ,imageUrl:'assets/images/2.jpg',borderRadius:'20px'},
       {text: 'Jeux', cols: 1, rows: 1 ,imageUrl:'assets/images/3.jpg',borderRadius:'20px'},
       {text: 'Animaux', cols: 1, rows: 1,imageUrl:'assets/images/4.jpg',borderRadius:'20px'},
       {text: 'Plantes', cols: 1, rows: 1,imageUrl:'assets/images/6.jpg',borderRadius:'20px'},
       {text: 'Villes', cols: 1, rows: 1,imageUrl:'assets/images/1.jpg',borderRadius:'20px'},
     ];
  }

  ngOnInit() {
  }

  onClick(tile) : void {
    this.api.get<resultatTheme>('/theme/words',new HttpParams().set('theme',tile.text.toUpperCase())).toPromise()
    .then(res => {
      console.log(res);
      sessionStorage.setItem('idPartie',res.id);
      this.router.navigate(['/play/',res.id]);
    })
    .catch(err => { console.log(err); })
   
    // tuto : https://www.techiediaries.com/angular-by-example-httpclient-get/
    
    // console.log ("welcome"+ tile.text);

  }

}

class resultatTheme {
    id: string;
    liste: [];
}
