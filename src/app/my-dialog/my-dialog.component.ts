import { Component, OnInit , Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent  {

  modalTitle: string;

  private wordOne :String;
  private wordTwo :String;
  private wordThree :String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {


      this.modalTitle=data.title;
      this.wordOne='';//data.word1;
      this.wordTwo='';//data.word2;
      this.wordThree='';//data.word3;
      console.log(data);
    
  
 
  }

  
  

}
