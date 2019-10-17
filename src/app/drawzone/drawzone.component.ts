import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-drawzone',
  templateUrl: './drawzone.component.html',
  styleUrls: ['./drawzone.component.css']
})
export class DrawzoneComponent implements OnInit {
  private isDrawing : boolean = false;
  private callibrage : Object;

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  
  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'black';
    this.callibrage = [{'black': [{'coordX': -10, 'coordY':5}],
                        'white': [] }]
  }
  
  animate(): void {}

  setMouseDown(pen) : void {
    this.isDrawing = !this.isDrawing;
    if(!this.isDrawing) return;
    console.log("mousedown");
    this.ctx.fillRect(pen.layerX-10,pen.layerY+5,1,1);
  }

  draw(pen) : void {
    if(this.isDrawing){
      console.log("On dessine !")
      
      console.log(pen);
    }
  }
}
