import { Component, OnInit , Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent  {

  modalTitle: string;
  modalWord:Array<string>;

 

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) {
  
  this.modalTitle = data.title;
  console.log(data)
  }

  
  

}
