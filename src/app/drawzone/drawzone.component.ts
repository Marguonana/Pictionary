import { Component, OnInit, ViewChild, ElementRef, DoCheck, OnDestroy, Input } from '@angular/core';
import { DataService, RouteList } from '../data.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drawzone',
  templateUrl: './drawzone.component.html',
  styleUrls: ['./drawzone.component.css']
})
export class DrawzoneComponent implements OnInit, OnDestroy {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private isDrawing : boolean = false;  
  private ctx: CanvasRenderingContext2D;
  callibrage: { 'black': { 'coordX': number; 'coordY': number; }[]; 'white': any[]; }[];
  pen;
  private pointer : string;
  idPartie: any;
  observableCanvas: any;
  link: any;
  img: any;
  @Input() dessinateur : boolean;

  constructor(public dialog: MatDialog,
    private api : ApiService, private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.initCanvas();
    this.activatedRoute.params.subscribe(params => {
      this.idPartie = params['id'];
      console.log('id de la partie ', this.idPartie);
    });

    this.observableCanvas = Observable.create((observer : any) => {
      try {
        setInterval(() => {
          observer.next(this.checkCanvas())
        },2000)
      } catch (err){
        observer.error(err);
      }
    }) 
    this.observableCanvas.subscribe();
  }

  checkCanvas() {
    if (!this.dessinateur){
      this.api.get<any>('/partie/'+sessionStorage.getItem('idPartie')+'/canvas').toPromise()
      .then(received => {
        if(received){
          this.img = received;
        }
      })
     .catch( err => console.log(err))   
    } else {
      this.extractCanvas();
    }
  }
  
  animate(): void {}

  setIsDrawing(event) : void {
    this.isDrawing = true;
    console.log("mousedown");
  }

  setIsNotDrawing(event) : void {
    this.isDrawing = false;
    console.log('mouseup');
  }

  initCanvas(){
    this.pen = {};
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.imageSmoothingQuality = 'high';
    this.ctx.lineJoin = 'round';
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = 'black';
    this.callibrage = [{'black': [{'coordX': -10, 'coordY':5}],
                        'white': [] }];
    this.pen.cursor = 'url(../../assets/images/cursor/Pencil_black.png) 0 15,auto';
  }

  drawing(event) : void{
    if(this.isDrawing && this.dessinateur){
      if(!this.ctx){
        this.initCanvas();
      }
      this.ctx.beginPath();
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
    //  this.ctx.moveTo(event.clientX-event.currentTarget.offsetLeft,event.clientY-event.currentTarget.offsetTop);
      this.ctx.lineTo(event.clientX-event.currentTarget.offsetLeft,event.clientY-event.currentTarget.offsetTop);
      this.ctx.stroke();
      console.log("penX : "+event.clientX + ". penY : " + (event.clientY));
    }
  }

  selectItem(item) : void {
    switch(item){
      case 'eraser':
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 10;
        this.pen.cursor = 'url(../../assets/images/cursor/Eraser.png) 0 15,auto';
        break;
      case 'blackPen':
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 3;
        this.pen.cursor = 'url(../../assets/images/cursor/Pencil_black.png) 0 15, auto';
        break;
      default: 
        break;
    }
  }


  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        id: 1,
        title: 'Words'
    };

    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      alert("response: " + result)
    });
  }

  /**
   * Sauvagarde le canvas
   */
  extractCanvas() : void {
    let canvasPng = this.canvas.nativeElement.toDataURL('image/png', 1.0);
    this.api.put('/partie/'+ this.idPartie + '/canvas',{canvas: canvasPng}).toPromise()
    .then(retour => {
      console.log('canvas envoyé')
    })
    .catch(err => { console.log(err); })
  }

  ngOnDestroy(): void {
    this.api.post('/partie/deconnexion', {idPartie: sessionStorage.getItem('idPartie'), idJoueur: sessionStorage.getItem('compte')})
    .toPromise()
    .then (res => {
      console.log(res);
    })
  }


}
