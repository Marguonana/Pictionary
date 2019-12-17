import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  openSnackBar(message: string, action?: string) {
    if (!action){
      action = "Compris !"
    }
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
