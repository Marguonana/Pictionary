import { Component, OnInit , Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent  {

 
  modalWord:Array<string>;
  mot: any;
 
  constructor(
    public modalRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    console.log('Affiche DATA ' ,data )
    this.mot = data;
  }

  
  

}
