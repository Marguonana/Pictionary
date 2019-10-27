import { Component, OnInit } from '@angular/core';

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

  constructor() { 
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

}
