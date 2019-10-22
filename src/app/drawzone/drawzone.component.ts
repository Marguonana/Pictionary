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
  private pointer : string;

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
      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      this.ctx.lineCap = 'round';
      this.ctx.moveTo(event.clientX-event.currentTarget.offsetLeft,event.clientY-event.currentTarget.offsetTop);
      this.ctx.lineTo(event.clientX-event.currentTarget.offsetLeft,event.clientY-event.currentTarget.offsetTop);
      this.ctx.stroke();

      console.log("penX : "+event.clientX + ". penY : " + (event.clientY));
    }
  }

  selectItem(item) : string {
    let style = 'url(../../ressources/images/Pencil_black.png) 0 15,auto'
    switch(item){
      case 'eraser':
        style = 'url(../../ressources/images/Eraser.jpeg) 0 15,auto';
        break;
      default: 
        break;
    }
    return style;
  }


}
