import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  imageUrl: string;
  borderRadius: string;
  fontSize: string;
  fontFamily: string;
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
       {text: 'Transports', cols: 1, rows: 1, color: '', fontSize: '18',fontFamily: 'Roboto' ,imageUrl:'ressources/images/1.jpg', borderRadius:'20px'},
       {text: 'Fruits', cols: 1, rows: 1, color: 'lightgreen', fontSize: '18',fontFamily: 'Roboto' ,imageUrl:'../../ressources/images/2.jpg',borderRadius:'20px'},
       {text: 'Jeux', cols: 1, rows: 1, color: 'lightpink', fontSize: '15',fontFamily: 'Roboto' ,imageUrl:'',borderRadius:'20px'},
       {text: 'Animaux', cols: 1, rows: 1, color: '#DDBDF1', fontSize: '15',fontFamily: 'Roboto' ,imageUrl:'',borderRadius:'20px'},
       {text: 'Plantes', cols: 1, rows: 1, color: '#DDCHF9', fontSize: '15',fontFamily: 'Roboto' ,imageUrl:'https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct',borderRadius:'20px'},
     ];
  }

  ngOnInit() {
  }

}
