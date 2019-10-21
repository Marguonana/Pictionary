import { Component, OnInit, ViewChild, ElementRef, DoCheck } from '@angular/core';

@Component({
  selector: 'app-drawzone',
  templateUrl: './drawzone.component.html',
  styleUrls: ['./drawzone.component.css']
})
export class DrawzoneComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private isDrawing : boolean = false;  
  private ctx: CanvasRenderingContext2D;
  callibrage: { 'black': { 'coordX': number; 'coordY': number; }[]; 'white': any[]; }[];
  private pen: any;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.imageSmoothingQuality = 'high';
    this.ctx.lineJoin = 'round';
    this.ctx.fillStyle = 'black';
    this.callibrage = [{'black': [{'coordX': -10, 'coordY':5}],
                        'white': [] }];
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

  drawing(event) : void{
    if(this.isDrawing){
      console.log("penX : "+event.layerX + ". penY : " + event.layerY);
     this.ctx.fillRect(event.layerX-10,event.layerY+5,5,5);
    }
  }


}
