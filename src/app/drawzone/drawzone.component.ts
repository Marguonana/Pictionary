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
  pen;
  private pointer : string;

  ngOnInit(): void {
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
      this.ctx.beginPath();
      this.ctx.lineCap = 'round';
      this.ctx.moveTo(event.clientX-event.currentTarget.offsetLeft,event.clientY-event.currentTarget.offsetTop);
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


}
